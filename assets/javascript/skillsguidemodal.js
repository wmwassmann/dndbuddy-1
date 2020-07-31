$(document).foundation();

//SKILLS GUIDE

$("#skills-guide").click(function () {
        
    event.preventDefault();
    $(document).foundation();

    //CREATES MODAL    
        // create a div for the modal
        var skillModal = $('<div>');
        // add class and ID for modal
        $(skillModal).addClass('reveal revealStyle');
        $(skillModal).attr('id', 'skillguide-modal');
        $(skillModal).attr('data-reveal', '');
        // append the modal div to mainbody
        $('#mainBody').append(skillModal);
        
    //SKILLS TITLE

        var skillsTitle = $('<h1>');
        $(skillsTitle).text("Skills");
        $(skillModal).append(skillsTitle);

    //SKILLS EXPLAINED 
        var skillsDesc = $("<p>");
        $(skillsDesc).text("Each ability covers a broad range of capabilities, including Skills that a character or a monster can be proficient in. A skill represents a specific aspect of an ability score, and an individual’s proficiency in a skill demonstrates a focus on that aspect. Sometimes, the GM might ask for an ability check using a specific skill—for example, “Make a Wisdom (Perception) check.” At other times, a player might ask the GM if proficiency in a particular skill applies to a check. In either case, proficiency in a skill means an individual can add his or her Proficiency Bonus to Ability Checks that involve that skill. Without proficiency in the skill, the individual makes a normal ability check.");
        $(skillModal).append(skillsDesc);


    //ACROBATICS
        //create Title html element
        var arcoTitle = $('<h2>');
        // add text for the h2 tag
        $(arcoTitle).text("Acrobatics");
        // append the modal to the div
        $(skillModal).append(arcoTitle);

        //creates tags for description text
        var acroText = $('<p>');
        $(acroText).attr('id', 'acro-text');
        // add text for the p tag
        $(acroText).text(" ");
        // append the modal to the div
        $(skillModal).append(acroText);

        //API "gets" spell info
        var acrobaticsURL = "https://www.dnd5eapi.co/api/skills/acrobatics";
        $.ajax({
            url: acrobaticsURL,
            method: "GET"
        }).then(function (acroRes) {
            $("#acro-text").text(acroRes.desc)
        });

    //ANIMAL HANDLING
        //create Title html element
        var ahTitle = $('<h2>');
        // add text for the h2 tag
        $(ahTitle).text("Animal Handling");
        // append the modal to the div
        $(skillModal).append(ahTitle);

        //creates tags for description text
        var ahText = $('<p>');
        $(ahText).attr('id', 'ah-text');
        // add text for the p tag
        $(ahText).text(" ");
        // append the modal to the div
        $(skillModal).append(ahText);

        //API "gets" spell info
        var animalHandlingURL = "https://www.dnd5eapi.co/api/skills/animal-handling";
        $.ajax({
            url: animalHandlingURL,
            method: "GET"
        }).then(function (ahRes) {
            $("#ah-text").text(ahRes.desc)
        });

    //ARCANA
        //create Title html element
        var arcanaTitle = $('<h2>');
        // add text for the h2 tag
        $(arcanaTitle).text("Arcana");
        // append the modal to the div
        $(skillModal).append(arcanaTitle);

        //creates tags for description text
        var arcanaText = $('<p>');
        $(arcanaText).attr('id', 'arcana-text');
        // add text for the p tag
        $(arcanaText).text(" ");
        // append the modal to the div
        $(skillModal).append(arcanaText);

        //API "gets" spell info
        var arcanaURL = "https://www.dnd5eapi.co/api/skills/arcana";
        $.ajax({
            url: arcanaURL,
            method: "GET"
        }).then(function (arcanaRes) {
            $("#arcana-text").text(arcanaRes.desc)
        });

    //ATHLETICS
        //create Title html element
        var athTitle = $('<h2>');
        // add text for the h2 tag
        $(athTitle).text("Athletics");
        // append the modal to the div
        $(skillModal).append(athTitle);

        //creates tags for description text
        var athText = $('<p>');
        $(athText).attr('id', 'ath-text');
        // add text for the p tag
        $(athText).text(" ");
        // append the modal to the div
        $(skillModal).append(athText);

        //API "gets" spell info
        var athleticsURL = "https://www.dnd5eapi.co/api/skills/athletics";
        $.ajax({
            url: athleticsURL,
            method: "GET"
        }).then(function (athRes) {
            $("#ath-text").text(athRes.desc)
        });

    //DECEPTION
        //create Title html element
        var deceptionTitle = $('<h2>');
        // add text for the h2 tag
        $(deceptionTitle).text("Deception");
        // append the modal to the div
        $(skillModal).append(deceptionTitle);

        //creates tags for description text
        var deceptionText = $('<p>');
        $(deceptionText).attr('id', 'deception-text');
        // add text for the p tag
        $(deceptionText).text(" ");
        // append the modal to the div
        $(skillModal).append(deceptionText);

        //API "gets" spell info
        var deceptionURL = "https://www.dnd5eapi.co/api/skills/deception";
        $.ajax({
            url: deceptionURL,
            method: "GET"
        }).then(function (deceptionRes) {
            $("#deception-text").text(deceptionRes.desc)
        });

    //HISTORY
        //create Title html element
        var historyTitle = $('<h2>');
        // add text for the h2 tag
        $(historyTitle).text("History");
        // append the modal to the div
        $(skillModal).append(historyTitle);

        //creates tags for description text
        var historyText = $('<p>');
        $(historyText).attr('id', 'history-text');
        // add text for the p tag
        $(historyText).text(" ");
        // append the modal to the div
        $(skillModal).append(historyText);

        //API "gets" spell info
        var historyURL = "https://www.dnd5eapi.co/api/skills/history";
        $.ajax({
            url: historyURL,
            method: "GET"
        }).then(function (historyRes) {
            $("#history-text").text(historyRes.desc)
        });

    //INSIGHT
        //create Title html element
        var insightTitle = $('<h2>');
        // add text for the h2 tag
        $(insightTitle).text("Insight");
        // append the modal to the div
        $(skillModal).append(insightTitle);

        //creates tags for description text
        var insightText = $('<p>');
        $(insightText).attr('id', 'insight-text');
        // add text for the p tag
        $(insightText).text(" ");
        // append the modal to the div
        $(skillModal).append(insightText);

        //API "gets" spell info
        var insightURL = "https://www.dnd5eapi.co/api/skills/insight";
        $.ajax({
            url: insightURL,
            method: "GET"
        }).then(function (insightRes) {
            $("#insight-text").text(insightRes.desc)
        });

    //INTIMIDATION
        //create Title html element
        var intimidationTitle = $('<h2>');
        // add text for the h2 tag
        $(intimidationTitle).text("Intimidation");
        // append the modal to the div
        $(skillModal).append(intimidationTitle);

        //creates tags for description text
        var intimidationText = $('<p>');
        $(intimidationText).attr('id', 'intimidation-text');
        // add text for the p tag
        $(intimidationText).text(" ");
        // append the modal to the div
        $(skillModal).append(intimidationText);

        //API "gets" spell info
        var intimidationURL = "https://www.dnd5eapi.co/api/skills/intimidation";
        $.ajax({
            url: intimidationURL,
            method: "GET"
        }).then(function (intimidationRes) {
            $("#intimidation-text").text(intimidationRes.desc)
        });

    //INVESTIGATION
        //create Title html element
        var investigationTitle = $('<h2>');
        // add text for the h2 tag
        $(investigationTitle).text("Investigation");
        // append the modal to the div
        $(skillModal).append(investigationTitle);

        //creates tags for description text
        var investigationText = $('<p>');
        $(investigationText).attr('id', 'investigation-text');
        // add text for the p tag
        $(investigationText).text(" ");
        // append the modal to the div
        $(skillModal).append(investigationText);

        //API "gets" spell info
        var investigationURL = "https://www.dnd5eapi.co/api/skills/investigation";
        $.ajax({
            url: investigationURL,
            method: "GET"
        }).then(function (investigationRes) {
            $("#investigation-text").text(investigationRes.desc)
        });

    //MEDICINE
        //create Title html element
        var medicineTitle = $('<h2>');
        // add text for the h2 tag
        $(medicineTitle).text("Medicine");
        // append the modal to the div
        $(skillModal).append(medicineTitle);

        //creates tags for description text
        var medicineText = $('<p>');
        $(medicineText).attr('id', 'medicine-text');
        // add text for the p tag
        $(medicineText).text(" ");
        // append the modal to the div
        $(skillModal).append(medicineText);

        //API "gets" spell info
        var medicineURL = "https://www.dnd5eapi.co/api/skills/medicine";
        $.ajax({
            url: medicineURL,
            method: "GET"
        }).then(function (medicineRes) {
            $("#medicine-text").text(medicineRes.desc)
        });

    //NATURE
        //create Title html element
        var natureTitle = $('<h2>');
        // add text for the h2 tag
        $(natureTitle).text("Nature");
        // append the modal to the div
        $(skillModal).append(natureTitle);

        //creates tags for description text
        var natureText = $('<p>');
        $(natureText).attr('id', 'nature-text');
        // add text for the p tag
        $(natureText).text(" ");
        // append the modal to the div
        $(skillModal).append(natureText);

        //API "gets" spell info
        var natureURL = "https://www.dnd5eapi.co/api/skills/nature";
        $.ajax({
            url: natureURL,
            method: "GET"
        }).then(function (natureRes) {
            $("#nature-text").text(natureRes.desc)
        });

    //PERCEPTION
        //create Title html element
        var perceptionTitle = $('<h2>');
        // add text for the h2 tag
        $(perceptionTitle).text("Perception");
        // append the modal to the div
        $(skillModal).append(perceptionTitle);

        //creates tags for description text
        var perceptionText = $('<p>');
        $(perceptionText).attr('id', 'perception-text');
        // add text for the p tag
        $(perceptionText).text(" ");
        // append the modal to the div
        $(skillModal).append(perceptionText);

        //API "gets" spell info
        var perceptionURL = "https://www.dnd5eapi.co/api/skills/perception";
        $.ajax({
            url: perceptionURL,
            method: "GET"
        }).then(function (perceptionRes) {
            $("#perception-text").text(perceptionRes.desc)
        });

    //PERFORMANCE
        //create Title html element
        var performanceTitle = $('<h2>');
        // add text for the h2 tag
        $(performanceTitle).text("Performance");
        // append the modal to the div
        $(skillModal).append(performanceTitle);

        //creates tags for description text
        var performanceText = $('<p>');
        $(performanceText).attr('id', 'performance-text');
        // add text for the p tag
        $(performanceText).text(" ");
        // append the modal to the div
        $(skillModal).append(performanceText);

        //API "gets" spell info
        var performanceURL = "https://www.dnd5eapi.co/api/skills/performance";
        $.ajax({
            url: performanceURL,
            method: "GET"
        }).then(function (performanceRes) {
            $("#performance-text").text(performanceRes.desc)
        });

    //PERSUASION
        //create Title html element
        var persuasionTitle = $('<h2>');
        // add text for the h2 tag
        $(persuasionTitle).text("Persuasion");
        // append the modal to the div
        $(skillModal).append(persuasionTitle);

        //creates tags for description text
        var persuasionText = $('<p>');
        $(persuasionText).attr('id', 'persuasion-text');
        // add text for the p tag
        $(persuasionText).text(" ");
        // append the modal to the div
        $(skillModal).append(persuasionText);

        //API "gets" spell info
        var persuasionURL = "https://www.dnd5eapi.co/api/skills/persuasion";
        $.ajax({
            url: persuasionURL,
            method: "GET"
        }).then(function (persuasionRes) {
            $("#persuasion-text").text(persuasionRes.desc)
        });

    //RELIGION
        //create Title html element
        var religionTitle = $('<h2>');
        // add text for the h2 tag
        $(religionTitle).text("Religion");
        // append the modal to the div
        $(skillModal).append(religionTitle);

        //creates tags for description text
        var religionText = $('<p>');
        $(religionText).attr('id', 'religion-text');
        // add text for the p tag
        $(religionText).text(" ");
        // append the modal to the div
        $(skillModal).append(religionText);

        //API "gets" spell info
        var religionURL = "https://www.dnd5eapi.co/api/skills/religion";
        $.ajax({
            url: religionURL,
            method: "GET"
        }).then(function (religionRes) {
            $("#religion-text").text(religionRes.desc)
        });

    //SLEIGHT OF HAND
        //create Title html element
        var sleightTitle = $('<h2>');
        // add text for the h2 tag
        $(sleightTitle).text("Sleight of Hand");
        // append the modal to the div
        $(skillModal).append(sleightTitle);

        //creates tags for description text
        var sleightText = $('<p>');
        $(sleightText).attr('id', 'sleight-text');
        // add text for the p tag
        $(sleightText).text(" ");
        // append the modal to the div
        $(skillModal).append(sleightText);

        //API "gets" spell info
        var sleightURL = "https://www.dnd5eapi.co/api/skills/sleight-of-hand";
        $.ajax({
            url: sleightURL,
            method: "GET"
        }).then(function (sleightRes) {
            $("#sleight-text").text(sleightRes.desc)
        });

    //STEALTH
        //create Title html element
        var stealthTitle = $('<h2>');
        // add text for the h2 tag
        $(stealthTitle).text("Stealth");
        // append the modal to the div
        $(skillModal).append(stealthTitle);

        //creates tags for description text
        var stealthText = $('<p>');
        $(stealthText).attr('id', 'stealth-text');
        // add text for the p tag
        $(stealthText).text(" ");
        // append the modal to the div
        $(skillModal).append(stealthText);

        //API "gets" spell info
        var stealthURL = "https://www.dnd5eapi.co/api/skills/stealth";
        $.ajax({
            url: stealthURL,
            method: "GET"
        }).then(function (stealthRes) {
            $("#stealth-text").text(stealthRes.desc)
        });

    //SURVIVAL
        //create Title html element
        var survivalTitle = $('<h2>');
        // add text for the h2 tag
        $(survivalTitle).text("Survival");
        // append the modal to the div
        $(skillModal).append(survivalTitle);

        //creates tags for description text
        var survivalText = $('<p>');
        $(survivalText).attr('id', 'survival-text');
        // add text for the p tag
        $(survivalText).text(" ");
        // append the modal to the div
        $(skillModal).append(survivalText);

        //API "gets" spell info
        var survivalURL = "https://www.dnd5eapi.co/api/skills/survival";
        $.ajax({
            url: survivalURL,
            method: "GET"
        }).then(function (survivalRes) {
            $("#survival-text").text(survivalRes.desc)
        });


    //CREATES CLOSE BUTTON
        var eClose = $('<button>');
        // add the class and attr for the button
        $(eClose).addClass('close-button');
        $(eClose).attr('data-close', '');
        $(eClose).attr('aria-label', 'Close reveal');
        $(eClose).attr('type', 'button');
        // add the span for the close button
        $(eClose).html('<span aria-hidden="true">&times;</span>');
        // append the button to the div
        $(skillModal).append(eClose);
        //Document functionality with Foundation
        $(document).foundation();
        $('#skillguide-modal').foundation('open');
});