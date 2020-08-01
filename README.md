# Project One
D&D Buddy

# Table of contents
- [Project Name](#project-one)
- [Table of contents](#table-of-contents)
- [General info](#general-info)
- [Screenshots](#screenshots)
- [Features](#features)
- [Technology](#technology)
- [Status](#status)
- [Future Plan](#future-plan)
- [Create By](#create-by)

# General info
This project quickly and simpily builds a Dungeons and Dragons character sheet.  It is designed for first time players but can also be used by experienced players looking to play a "one shot" campaign.

Please visit [https://wmwassmann.github.io/dndbuddy-1/](https://wmwassmann.github.io/dndbuddy-1/) for the site.

For the feature of the site, please visit the [Features](#features) section for more details.

# Screenshots
Large Screen:

![screenshotlg](assets/front-end-images/screenshot_large.PNG?raw=true)

Medium Screen:

![screenshotmd](assets/front-end-images/screenshot_medium.PNG?raw=true)

Small Screen:

![screenshotsm](assets/front-end-images/screenshot_small.PNG?raw=true)

# Features
D&D Buddy contains the following features:

1. Creating Character
    1. User can follow our modal questionnaire to generate character sheet.
    2. User can exit questionnaire and select the character's name, gender, race and class without aid
    3. User can elect a random name, gender, race and class without going through questionnaire

2. Editing Character
    1. At anypoint the user can change their character by double clicking the element of their character they would like to edit.
    2. User can add or subtract character hitpoints determined by campaign play.

3. Charcter Image, Stats, Skills and Weapons
    1. Character's image, stats, skills and weapons will be dynamically generated based on their characters gender, race and class.
    2. If user edits their character, intuitively the application will regenerate the appropriate image, stats, skills and weapons.

4. Dice Roll
    1. User can click on any one of six dice images, all which are used during D&D campaign play, to generate a random roll.
    2. Each click will produce a dice rolling sound for an enhanced user experience.

5. Help Guides
    1. User has access to multiple help guides through out the application
    2. Help guides have been placed strategically, where the user is likely to look for them.
    3. Definition guides provide beginner definitions which will assist with campaign play
    4. Application guides will explain how the application works to assist user in navigating our application.

# Code Style
Standard

# Technology
The following technology have been used for this project:

1. Application Programming Interface:
    1. Youtube API - to play a Dungeons and Dragons introductory video
    2. Uzby API - to generate a random character name
    3. D&D 5th Edition API - to GET and populate useful information on user's character sheet
   
2. Stylesheets
    1. Foundation 6
        1. Application Layout - provided the structure for our application
        2. Modals - guide user through initial setup and offer help and definitions during campaign play
        3. Responsive Layout - enhances campaign play by shifting most vital elements where user can readily access them
    2. Google Fonts - used font to indicate where to click in order to display help modals 
    3. Reset CSS - to reset styling setting
    4. Dice Font - to produce dice icons
    5. Font Awesome - used to enhance user experience through campaign appropriate font

3. Javascript files:
12 javascript file has been composed for this application:
    | File name  |               Description               |
    | :----------: | :--------------------------------: |
    |  characterimage.js    |  Generates Character's Image  |
    |  dice.js  |  Function for the rolling dice feature  |
    |  globalVar.js  |  Stores all the global variables  |
    |  namebanner.js  |  Contains code to edit, generate and set to local storage the character's name, gender, race and class generate  |
    |  openingmodal.js  |   Displays modals that appears when the applicaton loads  |
    |  randomcharacter.js   |  Generates a random character sheet  |
    |  skillsguidemodal.js   |  Displays skills guide modal on user click  |
    |  spellsandequipmodal.js   |  Function to generate spells and equipment modal on user click  |
    |  statmodalguides.js   |  Contains modals which explains the 6 attributes of Dungeons and Dragons  |
    |  stats.js  |  Function that fills the 6 attributes based on the character's race and class  |
    |  userguide.js  |  Generates user guide modal and contains hitpoint buttons  |
    |  weaponspells.js  |  GETs data from Dungeons and Dragons 5e API and populates application  |

# Status
Project status: Finished

# Future Plan

Plan for the future development of this site:
1. Add additional character classes and races to enhance campaign play.
2. Add the ability to save characters so multiple users could save characters or one user could save multiple characters using one device.
3. Connect dice rolls to dynamically fill character attributes, hitpoint and armor class values.
4. Update when D&D 6th Edition becomes available.

# Create By
Created by Chung Hei Fuk, David Deaton, Karl Behrens, Alex Madrigal and William Wassmann