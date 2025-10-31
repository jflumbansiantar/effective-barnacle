function changeContent(page) {
	var contentDiv = document.getElementById('side-content');
	contentDiv.style.display='block';
	switch (page) {
		case 'home':
			contentDiv.innerHTML = `
				<img src=
"https://media.geeksforgeeks.org/wp-content/uploads/geeksforgeeks-12.png">
				<h2>
					Welcome to the Home Page!
				</h2>
				<p>
					This is the main page of our SPA.
				</p>
				<p>
					Explore the different sections using
					the navigation menu.
				</p>
			`;
			break;
		case 'about':
			contentDiv.innerHTML = `
				<h2>Halooooo</h2>
				<p>
					Kenalin , Saya Fran!.
				</p>
				<p>
					Saya sudah menjadi software developer selama 4 tahun lebih. Bahasa pemograman yang saya biasa saya gunakan itu Java SpringBoot. Tapi saya juga bisa .NET, Javascript, dan Python.
				</p><p>
					Saya biasanya ditempatkan di backend developer dan kadang juga jadi fullstack developer.
				</p><p>	Kalau untuk database sendiri, yang sering saya gunakan itu SQL Database seperti OracleDB dan PostgreSQL.
					Pernah pake Redis juga dan pakai MongoDB (lebih sering dipakai untuk proyek pribadi yang tidak pernah dideploy ><)
				</p>
				<p>
					Anyway, salam kenal yaaaaa
				</p>
			`;
			break;
		case 'project':
			contentDiv.innerHTML = 
				`<h2>Proyek</h2> 
				<p>
					Disini saya cantumin 3 proyek terakhir saja yaa
				</p> 
				<div id='project1'>
					<h3>Sales4U Maybank Indonesia</h3>
					<p>Role sebagai Backend Developer (Java)</p>
					<p>Tanggungjawab:
						<ul>
							<li>Mengembangkan aplikasi sesuai dengan kebutuhan bisnis yang mengacu pada user story dan desain yang disepakati</li>
							<li>Bekerja sama secara erat dengan anggota tim IT lainnya dan pengguna dalam melakukan SIT (System Integration Test) dan UAT (User Acceptance Test)</li>
							<li>Bertanggung jawab penuh atas masalah aplikasi yang muncul dengan melakukan investigasi terhadap masalah aplikasi melalui Log Database, Debugging, dan Mendefinisikan masalah apakah data atau aplikasi yang terpengaruh dan melakukan perbaikan</li>
						</ul>
				</div>
				<div id='project1'>
					<h3>Protelindo Dashboard Project</h3>
					<p>Role sebagai FullStack Developer (.NET)</p>
					<p>Tanggungjawab:
						<ul>
							<li>Mengembangkan aplikasi sesuai dengan kebutuhan bisnis yang mengacu pada user dokumen spesifikasi fungsional yang disepakati</li>
							<li>Bekerja sama secara erat dengan anggota tim IT lainnya dan pengguna dalam melakukan SIT (System Integration Test) dan UAT (User Acceptance Test)</li>
							<li>Bertanggung jawab penuh atas masalah aplikasi yang muncul dengan melakukan investigasi terhadap masalah aplikasi melalui Log Database, Debugging, dan Mendefinisikan masalah apakah data atau aplikasi yang terpengaruh dan melakukan perbaikan</li>
						</ul>
				</div>
				<div id='project1'>
					<h3>Credit Policy System Project Maybank Indonesia </h3>
					<p>Role sebagai FullStack Developer (Java)</p>
					<p>Tanggungjawab:
						<ul>
							<li>Mengembangkan aplikasi sesuai dengan kebutuhan bisnis yang mengacu pada user dokumen spesifikasi fungsional yang disepakati</li>
							<li>Bekerja sama secara erat dengan anggota tim IT lainnya dan pengguna dalam melakukan SIT (System Integration Test) dan UAT (User Acceptance Test)</li>
							<li>Bertanggung jawab penuh atas masalah aplikasi yang muncul dengan melakukan investigasi terhadap masalah aplikasi melalui Log Database, Debugging, dan Mendefinisikan masalah apakah data atau aplikasi yang terpengaruh dan melakukan perbaikan</li>
						</ul>
				</div>
				`;
			break;

		default:
			contentDiv.innerHTML = '<h2>Page not found!</h2>';
	}
}

// function hideSideContent(){
// 	var contentDiv = document.getElementById('side-content');
// 	// contentDiv.style.display='none';
	
// }

function changePlaceholder() {
    var placeHolder = ['Search for topics...', 'Find information...', 'Type your query...', 'Explore content...', 'Ask anything...'];
    var n = 0;
    var loopLength = placeHolder.length;
    var searchInput = document.getElementById('search-input');
    var currentText = '';
    var charIndex = 0;
    var isDeleting = false;

    function typeWriter() {
        var currentPlaceholder = placeHolder[n];

        if (!isDeleting) {
            // Typing effect
            currentText = currentPlaceholder.substring(0, charIndex + 1);
            charIndex++;
            if (charIndex === currentPlaceholder.length) {
                // Pause at end of word
                setTimeout(function() {
                    isDeleting = true;
                }, 1000);
            }
        } else {
            // Deleting effect
            currentText = currentPlaceholder.substring(0, charIndex - 1);
            charIndex--;
            if (charIndex < 0) {
                isDeleting = false;
                n = (n + 1) % loopLength;
                charIndex = 0;
                // Pause before starting next word
                setTimeout(typeWriter, 500);
                return;
            }
        }

        searchInput.placeholder = currentText;
        setTimeout(typeWriter, isDeleting ? 50 : 100); // Faster when deleting
    }

    // Start the typewriter effect
    typeWriter();
}

// Call the function to start changing placeholders
changePlaceholder();
// hideSideContent();

{/* <form> 
				<label for="name">Name:</label> 
				<input type="text" id="name" name="name" 
						placeholder="Your Name" required>
				<label for="email">Email:</label> 
				<input type="email" id="email" name="email" 
						placeholder="Your Email" required>
				<label for="message">Message:</label> 
				<textarea id="message" name="message" 
							placeholder="Your Message" 
							rows="4" required>
					</textarea>
				<button type="submit">Send Message</button> 
				</form> */}