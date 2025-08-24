// const sections = document.getElementsByTagName('section');
const sections = document.querySelectorAll('section');
// console.log(sections)
for(const section of sections){
    // console.log(section)
    // section.style.backgroundColor = 'lightblue'
    // section.style.border = '3px solid green'
    // section.style.borderRadius= '15px'
    // section.style.margin='20px'
    // section.style.padding= '10px'

    
// dynamic class hisebe css add
    section.classList.add('section-card')
}
