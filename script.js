function skillHover(element){
    // append 'colored' class to element
    if (element.classList.contains('colored')) {
        element.classList.remove('colored');
    }
    else{
        element.classList.add('colored');
    }
}

// If using images - NOTE: images may be different sizes and may not change much in color
function skillImgHover(element){
    // if element contains '-line' at the end, change it to '-original'
    if (element.src.includes('-plain')){
        element.src = element.src.replace('-plain', '-original');
    }
    // if element does not contain '-line' at the end, append '-line'
    else{
        element.src = element.src.replace( '-original', '-plain');
    }
}

function displayContactMethods(){
    let contact_list = document.getElementById('contact-methods');

    const contact_methods = [
        {   name: 'LinkedIn', 
            icon: 'fa-brands fa-linkedin-in', 
            link: 'https://www.linkedin.com/in/kamrongonzales' 
        },
        {   name: 'Email', 
            icon: 'fa-solid fa-envelope', 
            link: 'mailto:gonzaleskamron@gmail.com' 
        },
        {   name: 'GitHub', 
            icon: 'fa-brands fa-github-alt', 
            link: 'https://github.com/Kamron247' },
        {   name: 'Resume', 
            icon: 'fa-regular fa-file', 
            link: 'https://docs.google.com/document/d/106f-gN2mMGEOP2v-NEsLvzDv4Uc6PXSIhuad9LrgAic/edit?usp=sharing' 
        }
    ]
    // Add all contact methods to the list
    // NOTE: apply special formatting to 'Resume' link 
    for (let i = 0; i < contact_methods.length; i++) {
        let contact_method = contact_methods[i];
        let link = document.createElement('a');
        let contact_name = contact_method.name;
        if (contact_method.name === 'Resume'){
            link.classList.add('btn', 'btn-outline-success', 'rounded-pill', 'py-0', 'px-2');
        }
        else{
            link.classList.add('btn', 'btn-link', 'link-secondary');
            contact_name = '';
        }
        link.innerHTML = `<i class="${contact_method.icon}"></i> ${contact_name}`;
        link.href = contact_method.link;
        contact_list.appendChild(link);
    }

}
displayContactMethods();

function displayProfession(){
    // NGL, im proud of this -> Try with Fullstack Developer
    const profession_text = "Software Engineer";
    let profession = document.getElementById('profession');

    // Split text by whitespace
    let profession_words = profession_text.split(' ');

    for (let i = 0; i < profession_words.length; i++) {
        // create a new row div for each word
        let word = document.createElement('div');
        word.classList.add('row');
        // create a new col div for each letter of the word
        for (let j = 0; j < profession_words[i].length; j++) {
            let letter = document.createElement('div');
            letter.classList.add('col');
            letter.innerHTML = profession_words[i][j].toUpperCase();
            word.appendChild(letter);
        }
        profession.appendChild(word);
    }
}
displayProfession();


function displaySkills(){
    let skills = document.getElementById('skills');

    const skills_map = [
        {   name: 'C++', 
            icon: 'devicon-cplusplus-plain',
            link: 'https://github.com/Kamron247?tab=repositories&q=&type=&language=c%2B%2B&sort='
        },
        {   name: 'Python', 
            icon: 'devicon-python-plain',
            link: 'https://github.com/Kamron247?tab=repositories&q=&type=&language=python&sort='
        },
        {   
            name: 'HTML', 
            icon: 'devicon-html5-plain', 
            link: 'https://github.com/Kamron247?tab=repositories&q=&type=&language=html&sort='
        },
        {   
            name: 'CSS', 
            icon: 'devicon-css3-plain',
            link: 'https://github.com/Kamron247?tab=repositories&q=&type=&language=css&sort='
        },
        {   name: 'Javascript', 
            icon: 'devicon-javascript-plain', 
            link: 'https://github.com/Kamron247?tab=repositories&q=&type=&language=javascript&sort='
        }
    ]

    //create unordered list
    let skills_list = document.createElement('ul');
    skills_list.classList.add('list-group', 'list-group-horizontal', 'justify-content-around');

    // Add all skills to the list group
    for (let i = 0; i < skills_map.length; i++) {
        let skill = skills_map[i];
        let skill_item = document.createElement('li');
        skill_item.classList.add('list-group-item');
        skill_item.innerHTML = `
            <i class="${skill.icon}" 
                onmouseover="skillHover(this)" 
                onmouseleave="skillHover(this)"
                onclick="window.open('${skill.link}')">
            </i>`;
        skills_list.appendChild(skill_item);
    }
    skills.appendChild(skills_list);
}
displaySkills();