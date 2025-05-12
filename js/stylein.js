const sections = document.querySelectorAll('section');
for(const section of sections){
    console.log(section);
    section.style.border = '2px solid steelblue';
    section.style.marginBottom = '5px';
    section.style.borderRadius = '15px'
}