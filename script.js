const makeButton = document.getElementById("submitButton");
const storyOutput = document.getElementById("story-output");


function makeCard() {

    // Get user's answers
    const hero = document.getElementById("heroInputBox").value;
    const villian = document.getElementById("villianInputBox").value;
    const adjective1 = document.getElementById("adjective1InputBox").value;
    const storyLocation = document.getElementById("locationInputBox").value;
    const weapon = document.getElementById("weaponInputBox").value;
    const vehicle = document.getElementById("vehicleInputBox").value;
    const alien = document.getElementById("alienInputBox").value;
    const verb1 = document.getElementById("verb1InputBox").value;
    const adjective2 = document.getElementById("adjective2InputBox").value;
    const artifact = document.getElementById("artifactInputBox").value;
    const pluralNoun = document.getElementById("pluralNounInputBox").value;
    const verbing = document.getElementById("verbIngInputBox").value;
    const explosion = document.getElementById("explosionInputBox").value;
    const adjective3 = document.getElementById("adjective3InputBox").value;
    const bodyPart = document.getElementById("bodyPartInputBox").value;
    const futureTech = document.getElementById("futureTechInputBox").value;
    const soundEffect = document.getElementById("soundEffectInputBox").value;
    const verb2 = document.getElementById("verb2InputBox").value;
    const battleCall = document.getElementById("battleCallInputBox").value;
    const adjective4 = document.getElementById("adjective4InputBox").value;


    // Madlib builder
    const finishedStory =
        "Long after the world had been destroyed, the last survivors lived among the ruins of "
        + storyLocation + ". "

        + "The forces of good, led by " + hero
        + ", a brave warrior carrying the " + artifact + ". "

        + "Their great enemy was " + villian
        + ", the ruler of the " + adjective1 + " empire. "

        + "\"Today our world ends!\" shouted " + villian + ". "

        + hero + " stepped forward. "
        + "\"I will never let you destroy what remains of humanity.\" "

        + "The battle began. "

        + "The hero began " + verbing
        + " across the battlefield, while "
        + pluralNoun + " flew through the air. "

        + "Suddenly, a massive " + explosion
        + " rocked the ground. "

        + "\"" + battleCall + "!\" yelled " + hero
        + ", using a mysterious " + futureTech + ". "

        + "The hero managed to " + verb1
        + " directly toward the enemy fortress. "

        + "But " + villian + " was waiting. "

        + "The villain raised a " + weapon
        + " and fired. " + soundEffect + "! "

        + "The blast struck " + hero
        + " in the " + bodyPart
        + ", knocking them to the ground. "

        + "\"You're finished!\" laughed " + villian + ". "

        + "But the hero stood back up. "

        + "With an expression of " + adjective2
        + ", " + hero + " raised the " + artifact
        + " and it began to glow with " + adjective4
        + " energy. "

        + "The villain charged. The hero charged. "

        + "Both sides " + verb2
        + " toward each other as the entire battlefield shook. "

        + "Then came the final " + explosion + ". "

        + "When the smoke cleared, only the heroic warrior remained standing. "

        + "The forces of evil had been defeated. "

        + "The survivors looked toward the ruined sky as the hero declared, "
        + "\"Even after the end of the world, there is still hope.\" "

        + "And for the first time in generations, humanity believed that the future could be "
        + adjective3 + ".";


    // Put the finished story into the textarea
    storyOutput.value = finishedStory;

}


// Makecard runs when button is clicked
makeButton.addEventListener("click", makeCard);
