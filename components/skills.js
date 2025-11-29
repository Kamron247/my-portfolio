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