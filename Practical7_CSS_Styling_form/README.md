## Hostel Room Maintenance Form ##

## Overview
The Hostel Room Maintenance Form is a simple web application designed to allow residents to report maintenance issues in their hostel rooms. This form collects information such as the resident's name, room number, type of issue, description of the issue, and the urgency of the request.

## Features
- User-friendly interface for submitting maintenance requests.
- Dropdown menus for room selection and urgency level.
- Required fields to ensure necessary information is collected.

## Technologies used
- HTML
- CSS

## Guided Practical Exercises
1. Modify the Form: 
   - Open index.html in a text editor.
   - Add the following code snippet before the submit button:
<label for="contact" class="credits">Contact Number: </label>
<input type="tel" placeholder="Enter your contact number" class="input"><br><br>

2. Change the room selection options:
   - Open index.html.
   - Locate the <select> element for room selection.
   - Modify the <option> values to include new room names:
            <option value="rooms">Common Mess</option>
            <option value="rooms">New Building-1</option>
            <option value="rooms">New Building-2</option>
            <option value="rooms">UPF</option>
            <option value="rooms">B-type</option>
            <option value="rooms">LPF</option>
            <option value="rooms">Excutive</option>
            <option value="rooms">Transit</option>

3. Style the form
   - Open the hostel.css file in a text editor.
   - Add the CSS rules to style the form.

