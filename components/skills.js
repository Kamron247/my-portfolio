function skillHover(element){
    // append 'colored' class to element
    element.classList.contains('colored')
        ? element.classList.remove('colored')
        : element.classList.add('colored')
    ;
}

// If using images - NOTE: images may be different sizes and may not change much in color
function skillImgHover(element){
    // if element contains '-line' at the end, change it to '-original'
    // if element does not contain '-line' at the end, append '-line'
    element.src.includes('-plain')
        ? element.src = element.src.replace('-plain', '-original')
        : element.src = element.src.replace( '-original', '-plain')
    ;
}

function addSkill({name, icon, link}){
    const ul = document.getElementById('skill-list');

    const li = document.createElement('li');
    li.className = 'list-group-item';
    li.innerHTML = `
        <i class="${icon}" 
            onmouseover="skillHover(this)" 
            onmouseleave="skillHover(this)"
            onclick="window.open('${link}')">
        </i>`;
    ul.appendChild(li);
}

// function displaySkills(){
//     let skills = document.getElementById('skills');

//     const skills_map = [
//         {   name: 'C++', 
//             icon: 'devicon-cplusplus-plain',
//             link: 'https://github.com/Kamron247?tab=repositories&q=&type=&language=c%2B%2B&sort='
//         },
//         {   name: 'Python', 
//             icon: 'devicon-python-plain',
//             link: 'https://github.com/Kamron247?tab=repositories&q=&type=&language=python&sort='
//         },
//         {   
//             name: 'HTML', 
//             icon: 'devicon-html5-plain', 
//             link: 'https://github.com/Kamron247?tab=repositories&q=&type=&language=html&sort='
//         },
//         {   
//             name: 'CSS', 
//             icon: 'devicon-css3-plain',
//             link: 'https://github.com/Kamron247?tab=repositories&q=&type=&language=css&sort='
//         },
//         {   name: 'Javascript', 
//             icon: 'devicon-javascript-plain', 
//             link: 'https://github.com/Kamron247?tab=repositories&q=&type=&language=javascript&sort='
//         }
//     ]

//     //create unordered list
//     let skills_list = document.createElement('ul');
//     skills_list.classList.add('list-group', 'list-group-horizontal', 'justify-content-around');

//     // Add all skills to the list group
//     for (let i = 0; i < skills_map.length; i++) {
//         let skill = skills_map[i];
//         skills_list.appendChild(addSkill({icon: skill.icon, link: skill.link}));
//     }
//     skills.appendChild(skills_list);
// }
// displaySkills();