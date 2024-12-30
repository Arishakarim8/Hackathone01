var _a;
(_a = document
    .getElementById("resumeForm")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    var _a;
    event.preventDefault();
    var profilepictureInput = document.getElementById('profilephoto');
    var nameElement = document.getElementById("name");
    var emailElement = document.getElementById("email");
    var contactnumberElement = document.getElementById("contactnumber");
    var educationElement = document.getElementById("education");
    var skillsElement = document.getElementById("skills");
    var workexperienceElement = document.getElementById("workexperience");
    var usernameElement = document.getElementById("username");
    if (profilepictureInput &&
        nameElement &&
        emailElement &&
        contactnumberElement &&
        educationElement &&
        skillsElement &&
        workexperienceElement &&
        usernameElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var contactnumber = contactnumberElement.value;
        var education = educationElement.value;
        var skills = skillsElement.value;
        var workexperience = workexperienceElement.value;
        var username = usernameElement.value;
        var uniquePath = "resumes/".concat(username.replace(/\s*/g, '_'), "_cv.html");
        var profilephotoFile = (_a = profilepictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilephotoURL = profilephotoFile ? URL.createObjectURL(profilephotoFile) : "";
        var Generate = "\n      ".concat(profilephotoURL ? "<img src=\"".concat(profilephotoURL, "\" alt=\"profilephoto\" class=\"profilephoto\">") : '', "\n      <section>\n      <h2>Resume</h2> \n      <p><strong>Name:</strong> <span id=\"edit-name\" class=\"editable\"> ").concat(name_1, " </span> </p> \n      <p><strong>Email:</strong> <span id=\"edit-email\" class=\"editable\"> ").concat(email, " </span> </p>\n      <p><strong>Contact Number:</strong> <span id=\"edit-contectnumber\" class=\"editable\"> </span> ").concat(contactnumber, "</p>\n    </section>\n\n    <section>\n    <h3>Education</h3>\n    <p id=\"edit-education\" class=\"editable\">").concat(education, "</p> \n    </section>\n    \n    <section>\n    <h3>Skills</h3>\n    <p id=\"edit-skills\" class=\"editable\">").concat(skills, "</p>\n    </section>\n    \n    <section>\n    <h3>Experience</h3>\n    <p id=\"edit-experience\" class=\"editable\">").concat(workexperience, "</p>\n    </section>\n        ");
        var downloadLink = document.createElement('a');
        downloadLink.href = 'data:text/html;charset=utf-8,' + encodeURIComponent(Generate);
        downloadLink.download = uniquePath;
        downloadLink.textContent = 'Download Resume';
        var GenerateElement = document.getElementById("Generate");
        if (GenerateElement) {
            GenerateElement.innerHTML = Generate;
            GenerateElement.appendChild(downloadLink);
            GenerateElement.style.display = 'block';
        }
    }
    else {
        console.error("one or more output");
    }
});
function makeEditable() {
    var editableElements = document.querySelectorAll('.editable');
    editableElements.forEach(function (element) {
        element.addEventListener('click', function () {
            var _a;
            var currentElement = element;
            var currentValue = currentElement.textContent || "";
            if (currentElement.tagName === "p" || currentElement.tagName === 'SPAN') {
                var input_1 = document.createElement('input');
                input_1.type = 'text';
                input_1.value = currentValue;
                input_1.classList.add('editing-input');
                input_1.addEventListener('blur', function () {
                    currentElement.textContent = input_1.value;
                    currentElement.style.display = 'inline';
                    input_1.remove();
                });
                currentElement.style.display = 'none';
                (_a = currentElement.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(input_1, currentElement);
                input_1.focus();
            }
        });
    });
}
