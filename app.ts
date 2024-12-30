document
  .getElementById("resumeForm")
  ?.addEventListener("submit", function(event) {
    event.preventDefault();


  const profilepictureInput = document.getElementById('profilephoto') as HTMLInputElement;


  const nameElement = document.getElementById("name") as HTMLInputElement;
  const emailElement = document.getElementById("email") as HTMLInputElement;
  const contactnumberElement = document.getElementById("contactnumber") as HTMLInputElement; 
  const educationElement = document.getElementById("education") as HTMLTextAreaElement;
  const skillsElement = document.getElementById("skills") as HTMLTextAreaElement;
  const workexperienceElement = document.getElementById("workexperience") as HTMLTextAreaElement; 
  const usernameElement = document.getElementById("username") as HTMLInputElement;

    if (
      profilepictureInput &&
      nameElement &&
      emailElement &&
      contactnumberElement &&
      educationElement &&
      skillsElement &&
      workexperienceElement &&
      usernameElement


    ){
      const name = nameElement.value;
      const email = emailElement.value;
      const contactnumber = contactnumberElement.value;
      const education = educationElement.value;
      const skills = skillsElement.value;
      const workexperience = workexperienceElement.value;
      const username = usernameElement.value;
      const uniquePath = `resumes/${username.replace(/\s*/g, '_')}_cv.html`


      const profilephotoFile = profilepictureInput.files?.[0]
      const profilephotoURL = profilephotoFile? URL.createObjectURL(profilephotoFile) : "";


      const Generate = `
      ${profilephotoURL ? `<img src="${profilephotoURL}" alt="profilephoto" class="profilephoto">` : ''}
      <section>
      <h2>Resume</h2> 
      <p><strong>Name:</strong> <span id="edit-name" class="editable"> ${name} </span> </p> 
      <p><strong>Email:</strong> <span id="edit-email" class="editable"> ${email} </span> </p>
      <p><strong>Contact Number:</strong> <span id="edit-contectnumber" class="editable"> </span> ${contactnumber}</p>
    </section>

    <section>
    <h3>Education</h3>
    <p id="edit-education" class="editable">${education}</p> 
    </section>
    
    <section>
    <h3>Skills</h3>
    <p id="edit-skills" class="editable">${skills}</p>
    </section>
    
    <section>
    <h3>Experience</h3>
    <p id="edit-experience" class="editable">${workexperience}</p>
    </section>
        `;

      const downloadLink = document.createElement('a')
      downloadLink.href ='data:text/html;charset=utf-8,' + encodeURIComponent(Generate)
      downloadLink.download = uniquePath;
      downloadLink.textContent = 'Download Resume'

      

      const GenerateElement = document.getElementById("Generate")
      if (GenerateElement) {
      GenerateElement.innerHTML = Generate;

      GenerateElement.appendChild(downloadLink)
      GenerateElement.style.display ='block';
      }
    } else {
      console.error("one or more output");
    }
  });


function makeEditable() {
  const editableElements = document.querySelectorAll('.editable');
  editableElements.forEach(element => {
    element.addEventListener('click' , function() {
      const currentElement = element as HTMLElement;
      const currentValue = currentElement.textContent || "";

      if (currentElement.tagName === "p" || currentElement.tagName === 'SPAN') {
         const input = document.createElement('input')
         input.type ='text'
         input.value = currentValue
         input.classList.add('editing-input')

         input.addEventListener('blur' , function() {
          currentElement.textContent = input.value;
          currentElement.style.display = 'inline'
          input.remove()
         })

         currentElement.style.display = 'none'
         currentElement.parentNode?. insertBefore(input, currentElement)
         input.focus()
}
})
})

}

