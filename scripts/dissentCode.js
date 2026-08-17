<!DOCTYPE html>
<html>
    <head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>Join "The Dissenting Maddness"</title>
		<link rel="stylesheet"
		href="https://cdn.jsdelivr.net/npm/alfuix/dist/css/alfuix.min.css">
 
		<link rel="preconnect" href="https://fonts.googleapis.com">
		<link rel="preconnect" href="https://fonts.gstatic.com"crossorigin>
		<link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700&family=Rajdhani:wght@400;500;600;700&display=swap" rel="stylesheet">
		<link rel="stylesheet" href= "style.css">
	</head>

	<header>
		<h1>Dissent into Madness</h1>
			<div class= navigate>
				<nav>
					<li><b><a href="unity.html ">Unity</a><b></li>
					<li><b><a href="index.html"> HOME                               </a><b></li>
					<li><b><a href="domination.html">Domination</a><b></li>
					<li><b><a href="elite.html">Elitest</a><b></li>
				</nav>

			<div>


				<h2> Let's Dissent into a Chronicled Madlib </h2>
	</header>

<body>
 <script>


	let location = locationInputBox.value
	let hero = document.getElementById("heroInputBox").value
		console.log(hero) -->
    let villian = villianInputBox.value;
	let artifact = artifactInputBox.value;


	let adjective2 = adjective2InputBox.value;
	let vehicle = vehicleInputBox.value;
    let alien = alienInputBox.value;
    let weapon = weaponInputBox.value;

    let verbing = verbIngInputBox.value;
	let pluralnoun = pluralNounInputBox.value;
	let explosion = explosionInputBox.value;
	let call = battleCallInputBox.value;

	let technology = futureTechInputBox.value;
	let verb1 = verb1InputBox.value; -->
	let sound = soundEffectInputBox.value;
	let bodyPart = bodyPartInputBox.value;

	let adjective1 = adjective1InputBox.value;
	let adjective4 = adjective4InputBox.value;
	let verb2 = verb2InputBox.value; -->
	let adjective3 = adjective3InputBox.value;  

			let finishedStory = "Long after the world had been destroyed, the last survivors lived among the ruins of " + location + " ." + "The forces of good led by " + hero + " , a brave warrior carrying the " + artifact + ". Their great enemy was " +  villian + " the ruler of the " + adjective1 + " ." + " Today our world ends! shouted " + villian + hero + " stepped forward, I will never let ypu destroy what remains of humanity. The battle begans." + " The hero began " + verbing + " across the battlefield, while " + pluralNoun + "flew through the air. Suddenly, a massive " + explosion + " rocked the ground. " + battleCall + " ! Yelled " + hero + " using a mysterious " + futureTech + " , the hero managed to " + verb1 + " directly towards the enemy fortress. " + " But, " + villian + " was waiting. The villian raised a " + weapon + " and fired, " + soundEffect + " . The blast struck " + hero + " in the " + bodyPart + " ,knocking them to the ground. " + " You're finished, laughed " + villian + ". But the hero stood back up. With an expression " + hero + " raised the " + artifact + " and it brgsn to glow with " + adjective4 + " energy. " "The villian charged. The hero charged. Both sides " + verb2 + " towards eachother as the entire battlefield shook" + " Then came the final " + explosion + ". When the smoke cleared, only the heroic warrior remained standing. The forces of evil had been defeated. " + " The survivors looked towards the ruined sky as the hero declared, Even after the end of the world there is still hope.  And for the first time in generations, humanity believed that the future could be " + adjective3;


 
   
     document.getElementById ("submitButton", click, function () {

		let makeButton = document.getElementById("submitButton");
		let cardLine = document.getElementById("card-line");

		function makeCard() {
		let hero = document.getElementById("heroInputBox").value;
         console.log("hero: " + hero);
	document.getElementById( "story-output").value = finishedStory;
	cardLine.textContent = "Dear Ada, you are as brave as a volcano.";
}
	makeButton.addEventListener("click", makeCard);



 </script>


<main>

	<div class="inputs">
			<label>A hero name
				<input id="heroInputBox" 
				name="hero" 
				type="text1" 
				required placeholder="Superman, Captain America...">
			</label>

            <label>A villian name
               <input id="villianInputBox"
			   name="villian" 
			   type="text2" 
			   required placeholder = "Lex Luthor, Thanos...">
            </label>

            <label>First Adjective
               <input id="adjective1InputBox" 
	           name="adjective 1"
			   type="text3" 
	          required placeholder = "Small, blue...">
           </label>

           <label> Post-Apocalyptic location
              <input id="locationInputBox" 
			  name= "Apocalyptic Location" 
			  type="text4" 
			  required placeholder= "Wastelands, city ruins...">
           </label>

           <label> Sci-Fi Weapon
              <input id="weaponInputBox" n
			  ame= "Sci Fi weapon"
			  type="text5" 
			  required placeholder= "lightsaber, plasma guns...">
           </label>

           <label> Type of Vehicle
              <input id="vehicleInputBox" 
			  name= "Vehicle Type" 
			  type="text6" 
			  required placeholder= "Mercedes, BMW...">
           </label>

           <label> An alien creature
              <input id="alienInputBox" 
			  name= "Alien Creature" 
			  type="text7" 
			  required placeholder= "Klingon, Vulcan...">
           </label>

           <label> First Verb
              <input id="verb1InputBox" 
			  name= "Verb number 1" 
			  type="text8" 
			  required placeholder= "Dance, run....">
          </label>

          <label> Second Adjective
              <input id="adjective2InputBox" 
			  name= "Adjective number 2" 
			  type="text9" 
			  required placeholder= "Frantically, surprisingly...">
          </label>

          <label> Name of powerful artifact
              <input id="artifactInputBox" 
			  name= "Vehicle Typ" 
			  type="text10"
			  required placeholder= "Infinfity stones, Vibranium... ">
          </label>

          <label> A Plural Noun
              <input id="pluralNounInputBox" 
			  name= "Plural Noun" 
			  type="text11" 
			  required placeholder= "Puppies, bowling balls...">
         </label>

         <label> Verb ending in- ING
             <input id="verbIngInputBox" 
			 name= "Verb ending" 
			 type="text12" 
			 required placeholder= "Creating, exercising...">
        </label>

        <label> Type of Explosion
             <input id="explosionInputBox"
			 name= "Explosion Type" 
			 type="text13" 
			 required placeholder= "Bombs, fire bursts....">
       </label>

       <label> Third Adjective
            <input id="adjective3InputBox" 
			name= "Third Adjective" 
			type="text14" 
			required placeholder= "Fastest, tallest...">
       </label>

       <label> A Body part
            <input id="bodyPartInputBox" 
			name= "Body Part" 
			type="text15" 
			required placeholder= "Arm, leg, knee...">
       </label>

      <label> Futuristic Technology
           <input id="futureTechInputBox" 
		   name= "Future Tech" 
		   type="text16" 
		   required placeholder= "Hover cars, Beem transporter...">
      </label>

      <label> Sound Effect
          <input id="soundEffectInputBox" 
		  name= "Sound Effect" 
		  type="text17" 
		  required placeholder= "Kablam, Splatt...">
      </label>

      <label> Second Verb
          <input id="verb2InputBox" 
		  name= "Verb 2" 
		  type="text18" 
		  required placeholder= "Fry, Simmer...">
      </label>

      <label> Battle Call
          <input id="battleCallInputBox" 
		  name= "Battle call"
		  type="text19" 
		  required placeholder= "Hoorah, Banzai...">
     </label>

     <label> Fourth Adjective
         <input id="adjective4InputBox"
		 name= "Addjective 4"
		 type="text20" 
		 required placeholder= "Green, Slimy...">
     </label>

 <div>

 <div class=textBox>

      <label> Madlib Whacky Story!:</label>
       <textarea id="story-output" rows= "4" columns="10" placeholder "finishedStory"> </textarea>
<div>



</main>



<button id="submitButton">Dissenting Madlib </button>


</body>
</html>

