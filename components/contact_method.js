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