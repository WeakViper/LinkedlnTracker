// const { toBeRequired } = require('@testing-library/jest-dom/matchers');
const axios = require('axios');

async function getProfile(url) {
  const options = {
    method: 'POST',
    url: 'https://linkedin-data-scraper.p.rapidapi.com/person',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': '83899dfdb2msh512f31648b90abcp1f5139jsn4556de784a44',
      'X-RapidAPI-Host': 'linkedin-data-scraper.p.rapidapi.com'
    },
    data: {
      link: url
    }
  };

      try {
        const response = await axios.request(options);
        return response.data
    } catch (error) {
       return null
    }
}


function getExperiences(data) {
    let res = []
    let experiences = "experiences" in data? data.experiences : null;
    if (experiences) {
        for (let i=0; i<experiences.length; i++) {
            let experience = experiences[i];
            let temp = {
                "title" : experience.title,
                "subtitle": experience.subtitle,
                "description": getExtractSubComponents(experience.subComponents)
            }
            res.push(temp);
        }
    }
    return res;
}

function getExtractSubComponents(subComponents) {
    let text = ""
    if (subComponents) {
        for (let i = 0; i < subComponents.length; i++) {
            let description = subComponents[i]?.description;
            if (description) {
                for (let i=0; i<description.length; i++) {
                    text+=description[i].text;
                }
                text+="\n"
            }
            text+="\n"
        }
    }
    return text;
}


function getProjects(data) {
    let res  = []
    let projects = "projects" in data ? data.projects : null
    if (projects) {
        for (let i=0; i<projects.length; i++) {
            let project = projects[i];
            let subComp = project.subComponents;
            let description = getExtractSubComponents(subComp)
            let temp = {
                "title" : project.title,
                "description": description
            }
            res.push(temp);
        }
    }
    return res;
}

function getEducation(data) {
    let res  = []
    let educations = "educations" in data ? data.educations : null
    if (educations) {
        for (let i=0; i<educations.length; i++) {
            let education = educations[i];
            let temp = {
                "title" : education.title,
                "subtitle": education.subtitle
            }
            res.push(temp);
        }
    }
    return res;
}


async function scrapeProfile(url) {
    try {
      const parsedProfile = await getProfile(url);
      const profileData = parsedProfile.data;
      const name = profileData.fullName;
      const experiences = getExperiences(profileData);
      const about = profileData.about;
      const projects = getProjects(profileData)
      const education = getEducation(profileData)
      const final_map = {
        "name": name,
        "experiences" : experiences, 
        "about" : about, 
        "projects": projects,
        "education": education
      }
      return JSON.stringify(final_map);
    } catch (error) {
      console.error("Error in Scraping:", error);
    }
  }

module.exports = {
    scrapeProfile,
};

  // const url = "https://www.linkedin.com/in/adeeb-khan-xy/";
  // async function runExample() {
  //   try {
  //     let final_map = await exampleUsage(url);
  //     console.log(final_map);
  //   } catch (error) {
  //     console.error("Error:", error);
  //   }
  // }
  
  // runExample();
  
  
