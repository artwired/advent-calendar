const calendarContainer = document.getElementById("calendar");
const today = new Date();
const currentDay = today.getDate();

let openedBoxes = JSON.parse(localStorage.getItem("openedBoxes")) || [];

const saveOpenedBox = (boxNumber) => {
  if (!openedBoxes.includes(boxNumber)) {
    openedBoxes.push(boxNumber);
    localStorage.setItem("openedBoxes", JSON.stringify(openedBoxes));
  }
};

const renderGif = (box, gifHTML) => {
  box.classList.add("open-calendar-box");
  box.innerHTML = gifHTML;
};

for (let i = 1; i <= 24; i++) {
  let box = document.createElement("li");
  box.classList.add("calendar-box");
  let number = document.createElement("p");
  number.innerHTML = i;
  number.classList.add("the-day");
  const icon = document.createElement("i");
  icon.classList.add("fas", "fa-gift", "gift-icon");
  let description = document.createElement("p");
  description.innerHTML = "Open me!";
  description.classList.add("box-description");

  if (i > currentDay) {
    description.innerHTML = "Not yet!";
  }

  box.appendChild(number);
  box.appendChild(icon);
  box.appendChild(description);
  calendarContainer.appendChild(box);

  if (openedBoxes.includes(i)) {
    switch (i) {
      case 1:
        renderGif(
          box,
          `<a href="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExbG9uYnljOWx3bGNqeGhvejFvYjJlcjhtb2hxNTBwb2w2ODJpbmxlbCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/WmkqburJqXziM/giphy.gif"><img src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExbG9uYnljOWx3bGNqeGhvejFvYjJlcjhtb2hxNTBwb2w2ODJpbmxlbCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/WmkqburJqXziM/giphy.gif" alt="Carlton doing the carlton dance in a christmas sweater with a christmas tree and decorations in the background."></a>`
        );
        break;
      case 2:
        renderGif(
          box,
          `<a href="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ2lsaDFmaG5jYWhpOTQxeDdrbHgxNjczdXJud3IyeTM5dHozdXB6MSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l4JyTYY5JiVAf259u/giphy.gif"><img src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ2lsaDFmaG5jYWhpOTQxeDdrbHgxNjczdXJud3IyeTM5dHozdXB6MSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l4JyTYY5JiVAf259u/giphy.gif" alt="Kramer from Seinfeld dressed as a department store santa working with his friend Mickey who's dressed like an elf. A kids runs to jump on Kramers lap and Kramer falls of his chair with the kid on top of him."></a>`
        );
        break;
      case 3:
        renderGif(
          box,
          `<a href="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExejJ5Mzh2Zm4weWt5cjZmM2FvNGpmZzFpNGgwa3JranUwbmQwNG8xZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/13ujhcfy38SPIq9z4D/giphy-downsized-large.gif"><img src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExejJ5Mzh2Zm4weWt5cjZmM2FvNGpmZzFpNGgwa3JranUwbmQwNG8xZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/13ujhcfy38SPIq9z4D/giphy-downsized-large.gif" alt="Chevy Chase in the Christmas Vacation movie wishing his workmates a merry christmas in rude and vulgar ways."></a>`
        );
        break;
      case 4:
        renderGif(
          box,
          `<a href=".https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExZjdtYjlqc28yZXE2NHNwamNyNjJnazE2NnY2NTR1MmdiamdtcGJjMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/11EjiLDatd0syA/giphy.gif"><img src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExZjdtYjlqc28yZXE2NHNwamNyNjJnazE2NnY2NTR1MmdiamdtcGJjMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/11EjiLDatd0syA/giphy.gif" alt="Dwight from the Office yelling maniacally that it's Christmas!!!"></a>`
        );
        break;
      case 5:
        renderGif(
          box,
          `<a href="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDEybnU3bmFpdHA3ZXp5ZmVvcXY4cHQ4ZDFqcGNpeTc2ZGp0bHNheCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l2JhGFkAMQDRPjTTq/giphy.gif"><img src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDEybnU3bmFpdHA3ZXp5ZmVvcXY4cHQ4ZDFqcGNpeTc2ZGp0bHNheCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l2JhGFkAMQDRPjTTq/giphy.gif" alt="Cast of SNL, Tracy Morgan, Horatio Sanz, Jimmy Fallon, Chris Kattan as a band playing a festive christmas song on the SNL stage"></a>`
        );
        break;
      case 6:
        renderGif(
          box,
          `<a href="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExdzZwZmh3empnMmo5YXZubzZrZHBld2dlYnZ4MW14cHczejRmNTVmdiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/9JrvLb0fnrn7k1ZjhX/giphy.gif"><img src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExdzZwZmh3empnMmo5YXZubzZrZHBld2dlYnZ4MW14cHczejRmNTVmdiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/9JrvLb0fnrn7k1ZjhX/giphy.gif" alt="puppy waddling along in a santa costume"></a>`
        );
        break;
      case 7:
        renderGif(
          box,
          `<a href="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExMWVjcTBnZmlncTZydDQwcnJmZ2k5bGloYzA2bHJ0dXN1Mnd6aGV1cSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/bxJRigovhEPhC/giphy.gif"><img src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExMWVjcTBnZmlncTZydDQwcnJmZ2k5bGloYzA2bHJ0dXN1Mnd6aGV1cSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/bxJRigovhEPhC/giphy.gif" alt="claymation Rudolph wearing an oversized collar with jingle bells on it"></a>`
        );
        break;
      case 8:
        renderGif(
          box,
          `<a href="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExY3IyYmNsa3lqbzdpdHgwbmRoc3h0OWwxZW1uZ21pejltMWp4eGdiZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l3vR2lxarZnsTYH8k/giphy.gif"><img src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExY3IyYmNsa3lqbzdpdHgwbmRoc3h0OWwxZW1uZ21pejltMWp4eGdiZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l3vR2lxarZnsTYH8k/giphy.gif" alt="Frosty the snowman in his classic cartoon waving and smoking his corn cob pipe"></a>`
        );
        break;
      case 9:
        renderGif(
          box,
          `<a href="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExMDQ0c2J4YjBvbGM0ZDdwN2VmbmJ4dGp5ajIzMjV5ZmNicHhyMm81NCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Pkj1ubliTW6IfH1N53/giphy-downsized-large.gif"><img src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExMDQ0c2J4YjBvbGM0ZDdwN2VmbmJ4dGp5ajIzMjV5ZmNicHhyMm81NCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Pkj1ubliTW6IfH1N53/giphy-downsized-large.gif" alt="Chandler and Joey from Friends wearing costumes sitting beside each other on a couch. Candler is dressed as Santa Clause and Joey is dressed as Superman. Chandler says to Joey, may favourite part was when superman flew all the jews out of egypt."></a>`
        );
        break;
      case 10:
        renderGif(
          box,
          `a href="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNGR1N25xeWdjZXBsb3V3eW95dWNqMzFwZDFyOXRhM2VmZDBmNXd3YSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/LBAv3HJDl2WwU/giphy.gif"> 
        <img src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNGR1N25xeWdjZXBsb3V3eW95dWNqMzFwZDFyOXRhM2VmZDBmNXd3YSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/LBAv3HJDl2WwU/giphy.gif" alt="Will Ferral in the movie Elf saying Santa's Coming!!" />
        </a>`
        );
        break;
      case 11:
        renderGif(
          box,
          `<a href="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExaXk1MHczcWtwajk4c3JpeXkwcmp3YW5ldHJkZGU0MmFsbnlmYjJ6OCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o7TKN7Ia5pEEepdxS/giphy.gif">
        
        <img src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExaXk1MHczcWtwajk4c3JpeXkwcmp3YW5ldHJkZGU0MmFsbnlmYjJ6OCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o7TKN7Ia5pEEepdxS/giphy.gif" alt="Martin's dog Eddie from the show Frasier dressed in a Santa outfit and sitting on Martin's old chair in Frasiers apartent." />
        
        </a>
        `
        );
        break;
      case 12:
        renderGif(
          box,
          `<a href="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExdGg0YmNsbjhlNTUwYzlmY2loMHU4NHAwbzhnZ2M2OXZ3Mmc2Zm93ZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l378kDZtofB27eNrO/giphy-downsized-large.gif">
        
        <img src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExdGg0YmNsbjhlNTUwYzlmY2loMHU4NHAwbzhnZ2M2OXZ3Mmc2Zm93ZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l378kDZtofB27eNrO/giphy-downsized-large.gif" alt="Will Ferral in Daddy's Home 2 putting up christmas decorations outside on his house when everything goes sideways and he ends up falling on to a car and destroting the car roof." />
        
        </a>
        `
        );
        break;
      case 13:
        renderGif(
          box,
          `<a href="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExN2UxcmV5c2N3NW94Ymd1aGNxbWxweXoyaGhiNXc2ajc4NjFmZTAyOSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/oqzrGRMPfS3Yc/giphy.gif">
        
        <img src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExN2UxcmV5c2N3NW94Ymd1aGNxbWxweXoyaGhiNXc2ajc4NjFmZTAyOSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/oqzrGRMPfS3Yc/giphy.gif" alt="Charlie Brown tries to decorate his sad christmas tree. When he takes an ornament from Snoopy's dog house and tries to put it on his tree the tree bends and droops over" />
        
        </a>
        `
        );
        break;
      case 14:
        renderGif(
          box,
          `<a href="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExMWFjNjBzcGl0cHVieWkyZXh3cm85d2VyMXBkdmVjeTZnemkyeWYybSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Wq22HfKZ0dV8Q/giphy.gif">
        
        <img src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExMWFjNjBzcGl0cHVieWkyZXh3cm85d2VyMXBkdmVjeTZnemkyeWYybSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Wq22HfKZ0dV8Q/giphy.gif" alt="Tim Allen in The Santa Clause movie. He's still skinny and putting Christmas preasents under a little girls Christmas tree and explains to her that he's watching his saturated fats." />
        
        </a>
        `
        );
        break;
      case 15:
        renderGif(
          box,
          `<a href="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExaWo4dXEzbXdkZ2ZvNXZlc2Nta2g4cGVsOWo0NXZ2aWp2eWNuazN4MyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o6wrrKsbK9mKH7KaA/giphy.gif">
        
        <img src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExaWo4dXEzbXdkZ2ZvNXZlc2Nta2g4cGVsOWo0NXZ2aWp2eWNuazN4MyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o6wrrKsbK9mKH7KaA/giphy.gif" alt="Scene from Polar Express where Santa rides around the top of a giant Christmas tree, it lights up and then he fly's closely over a crowd of people." />
        
        </a>
        `
        );
        break;
      case 16:
        renderGif(
          box,
          `<a href="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExOTMwY3B6Y3ZmNnJlZ21rN3phcXBhdW9yamFteXdwMHA5cm9ieXlwaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l29c52uHWfHIWPo2ap/giphy-downsized-large.gif">
        
        <img src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExOTMwY3B6Y3ZmNnJlZ21rN3phcXBhdW9yamFteXdwMHA5cm9ieXlwaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l29c52uHWfHIWPo2ap/giphy-downsized-large.gif" alt="Two cats wearing Christmas outfits. One of the cats is wearing jingle bells on his collar and the other cat is swatting at them." />
        
        </a>
        `
        );
        break;
      case 17:
        renderGif(
          box,
          `<a href="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExeDdub3I1aGJxMGFtMHhpdDVweTF3Yzd4MXlseTRic2wxN254ZHI3MyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/9w475hDWEPVlu/giphy.gif">
        
        <img src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExeDdub3I1aGJxMGFtMHhpdDVweTF3Yzd4MXlseTRic2wxN254ZHI3MyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/9w475hDWEPVlu/giphy.gif" alt="Minions wearing Christmas attire and dancing." />
        
        </a>
        `
        );
        break;
      case 18:
        renderGif(
          box,
          `<a href="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExeWIycDZ4ZXRsZ2tuNGl4Z3I5bGZsb2ZzaDBhc3I4Z2pyOHE0Nm42bCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/yGuJAW6zyzdLG7mKhB/giphy.gif">
        
        <img src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExeWIycDZ4ZXRsZ2tuNGl4Z3I5bGZsb2ZzaDBhc3I4Z2pyOHE0Nm42bCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/yGuJAW6zyzdLG7mKhB/giphy.gif" alt="The scene in Die Hard when Hans reads the blood on his henchmans shirt and it says, Now I have a machine gun. Ho-Ho-Ho" />
        
        </a>
        `
        );
        break;
      case 19:
        renderGif(
          box,
          `<a href="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzJudm9zajV5NTV6NmxsbThvdTBseGFwamxhcWp0d2o0N2t5YmtwcSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/yAhVmsVDyPMGI/giphy.gif">
        
        <img src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzJudm9zajV5NTV6NmxsbThvdTBseGFwamxhcWp0d2o0N2t5YmtwcSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/yAhVmsVDyPMGI/giphy.gif" alt="Mickey Mouse and Pluto decorating a Christmas tree." />
        
        </a>
        `
        );
        break;
      case 20:
        renderGif(
          box,
          `<a href="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExOGI0MmlpejBsZHA4YXp5NGl2aG10ZnIzaWFsYjZtNTUxY2FqcjI1MiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/yoJC2pg5f2YxxFw2pW/giphy.gif">
        
        <img src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExOGI0MmlpejBsZHA4YXp5NGl2aG10ZnIzaWFsYjZtNTUxY2FqcjI1MiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/yoJC2pg5f2YxxFw2pW/giphy.gif" alt="Dan Akroyd playing a homeless Santa in the movie Trading Places. He's pulling his beard down to take a sip of wine." />
        
        </a>
        `
        );
        break;
      case 21:
        renderGif(
          box,
          `<a href="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExeTYyNmhhNTJiMmFuMHZsZW13cGoyazdkdGJ1dWc1dmhyMHlxMmwzaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l2YWDVBDEhAAJSeQg/giphy.gif">
        
        <img src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExeTYyNmhhNTJiMmFuMHZsZW13cGoyazdkdGJ1dWc1dmhyMHlxMmwzaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l2YWDVBDEhAAJSeQg/giphy.gif" alt="Evil Gremlins singing Christmas Carols" />
        
        </a>
        `
        );
        break;
      case 22:
        renderGif(
          box,
          `<a href="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExZmdwMnAyZXEzcnFjM25kdnUwMTU3aWpnZnJ6b2Z6YnQyZHduaHV6dSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/KtrhyNGwNCSYM4pVRq/giphy.gif">
        
        <img src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExZmdwMnAyZXEzcnFjM25kdnUwMTU3aWpnZnJ6b2Z6YnQyZHduaHV6dSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/KtrhyNGwNCSYM4pVRq/giphy.gif" alt="Dog with Christmas lights glowing under his fur" />
        
        </a>
        `
        );
        break;
      case 23:
        renderGif(
          box,
          `<a href="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExY2syeW1pbm16aml6cXVhMzdqaXpzYTl3bWEwM2dkNm91ZGVhNzFweSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o6wrB9PGI3Qn5Q16U/giphy.gif">
        
        <img src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExY2syeW1pbm16aml6cXVhMzdqaXpzYTl3bWEwM2dkNm91ZGVhNzFweSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o6wrB9PGI3Qn5Q16U/giphy.gif" alt="Santa getting up from kneeling to put a Christmas Present under the tree and you can see his plumbers butt." />
        
        </a>
        `
        );
        break;
      case 24:
        renderGif(
          box,
          `<a href="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExd3Rqcm8ycXV0MHBtbmJkd3M1d2huMGJsaGM3aWl5ZWQ5ZHg5N21qcyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o6wrrn32NwP5EgpTG/giphy.gif">
        
        <img src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExd3Rqcm8ycXV0MHBtbmJkd3M1d2huMGJsaGM3aWl5ZWQ5ZHg5N21qcyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o6wrrn32NwP5EgpTG/giphy.gif" alt="Claymation Santa and his reindear flying in his sleigh while Santa waves" />
        
        </a>
        `
        );
        break;
    }
  }

  box.addEventListener("click", () => {
    if (i <= currentDay && !openedBoxes.includes(i)) {
      let swapContent = box.classList.add("open-calendar-box");
      description.innerHTML = "";
      number.innerHTML = "";
      icon.classList.remove("fas", "fa-gift", "gift-icon");
      let gifHTML;
      switch (i) {
        case 1:
          swapContent;
          gifHTML = `<a href="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExbG9uYnljOWx3bGNqeGhvejFvYjJlcjhtb2hxNTBwb2w2ODJpbmxlbCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/WmkqburJqXziM/giphy.gif" target="_blank">
                      <img src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExbG9uYnljOWx3bGNqeGhvejFvYjJlcjhtb2hxNTBwb2w2ODJpbmxlbCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/WmkqburJqXziM/giphy.gif" alt="Carlton doing the carlton dance in a christmas sweater with a christmas tree and decorations in the background." />
                    </a>`;
          renderGif(box, gifHTML);
          break;
        case 2:
          swapContent;
          gifHTML = `<a href="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ2lsaDFmaG5jYWhpOTQxeDdrbHgxNjczdXJud3IyeTM5dHozdXB6MSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l4JyTYY5JiVAf259u/giphy.gif" target="_blank">
        
        <img src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ2lsaDFmaG5jYWhpOTQxeDdrbHgxNjczdXJud3IyeTM5dHozdXB6MSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l4JyTYY5JiVAf259u/giphy.gif" alt="Kramer from Seinfeld dressed as a department store santa working with his friend Mickey who's dressed like an elf. A kids runs to jump on Kramers lap and Kramer falls of his chair with the kid on top of him." />
        
        </a>
        `;
          renderGif(box, gifHTML);
          break;
        case 3:
          swapContent;
          gifHTML = `<a href="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExejJ5Mzh2Zm4weWt5cjZmM2FvNGpmZzFpNGgwa3JranUwbmQwNG8xZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/13ujhcfy38SPIq9z4D/giphy-downsized-large.gif" target="_blank">
        
        <img src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExejJ5Mzh2Zm4weWt5cjZmM2FvNGpmZzFpNGgwa3JranUwbmQwNG8xZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/13ujhcfy38SPIq9z4D/giphy-downsized-large.gif" alt="Chevy Chase in the Christmas Vacation movie wishing his workmates a merry christmas in rude and vulgar ways." />
        
        </a>
        `;
          renderGif(box, gifHTML);
          break;
        case 4:
          swapContent;
          gifHTML = `<a href="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExZjdtYjlqc28yZXE2NHNwamNyNjJnazE2NnY2NTR1MmdiamdtcGJjMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/11EjiLDatd0syA/giphy.gif"> target="_blank"
        <img src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExZjdtYjlqc28yZXE2NHNwamNyNjJnazE2NnY2NTR1MmdiamdtcGJjMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/11EjiLDatd0syA/giphy.gif" alt="Dwight from the Office yelling maniacally that it's Christmas!!!" />
        </a>`;
          renderGif(box, gifHTML);
          break;
        case 5:
          swapContent;
          gifHTML = `<a href="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDEybnU3bmFpdHA3ZXp5ZmVvcXY4cHQ4ZDFqcGNpeTc2ZGp0bHNheCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l2JhGFkAMQDRPjTTq/giphy.gif" target="_blank">
        
        <img src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDEybnU3bmFpdHA3ZXp5ZmVvcXY4cHQ4ZDFqcGNpeTc2ZGp0bHNheCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l2JhGFkAMQDRPjTTq/giphy.gif" alt="Cast of SNL, Tracy Morgan, Horatio Sanz, Jimmy Fallon, Chris Kattan as a band playing a festive christmas song on the SNL stage" />
  
        </a>
        `;
          renderGif(box, gifHTML);
          break;
        case 6:
          swapContent;

          gifHTML = `<a href="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExdzZwZmh3empnMmo5YXZubzZrZHBld2dlYnZ4MW14cHczejRmNTVmdiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/9JrvLb0fnrn7k1ZjhX/giphy.gif" target="_blank">
        <img src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExdzZwZmh3empnMmo5YXZubzZrZHBld2dlYnZ4MW14cHczejRmNTVmdiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/9JrvLb0fnrn7k1ZjhX/giphy.gif" alt="puppy waddling along in a santa costume" />
        </a>`;
          renderGif(box, gifHTML);
          break;
        case 7:
          swapContent;
          gifHTML = `<a href="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExMWVjcTBnZmlncTZydDQwcnJmZ2k5bGloYzA2bHJ0dXN1Mnd6aGV1cSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/bxJRigovhEPhC/giphy.gif" target="_blank">
        
        <img src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExMWVjcTBnZmlncTZydDQwcnJmZ2k5bGloYzA2bHJ0dXN1Mnd6aGV1cSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/bxJRigovhEPhC/giphy.gif" alt="claymation Rudolph wearing an oversized collar with jingle bells on it" />
        
        </a>
        `;
          renderGif(box, gifHTML);
          break;
        case 8:
          swapContent;
          gifHTML = `<a href="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExY3IyYmNsa3lqbzdpdHgwbmRoc3h0OWwxZW1uZ21pejltMWp4eGdiZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l3vR2lxarZnsTYH8k/giphy.gif" target="_blank">
        
        <img src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExY3IyYmNsa3lqbzdpdHgwbmRoc3h0OWwxZW1uZ21pejltMWp4eGdiZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l3vR2lxarZnsTYH8k/giphy.gif" alt="Frosty the snowman in his classic cartoon waving and smoking his corn cob pipe" />
        
        </a>
        `;
          renderGif(box, gifHTML);
          break;
        case 9:
          swapContent;
          gifHTML = `<a href="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExMDQ0c2J4YjBvbGM0ZDdwN2VmbmJ4dGp5ajIzMjV5ZmNicHhyMm81NCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Pkj1ubliTW6IfH1N53/giphy-downsized-large.gif" target="_blank">
        
        <img src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExMDQ0c2J4YjBvbGM0ZDdwN2VmbmJ4dGp5ajIzMjV5ZmNicHhyMm81NCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Pkj1ubliTW6IfH1N53/giphy-downsized-large.gif" alt="Chandler and Joey from Friends wearing costumes sitting beside each other on a couch. Candler is dressed as Santa Clause and Joey is dressed as Superman. Chandler says to Joey, may favourite part was when superman flew all the jews out of egypt." />
        
        </a>
        `;
          renderGif(box, gifHTML);
          break;
        case 10:
          swapContent;
          gifHTML = `a href="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNGR1N25xeWdjZXBsb3V3eW95dWNqMzFwZDFyOXRhM2VmZDBmNXd3YSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/LBAv3HJDl2WwU/giphy.gif" target="_blank"> 
        <img src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNGR1N25xeWdjZXBsb3V3eW95dWNqMzFwZDFyOXRhM2VmZDBmNXd3YSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/LBAv3HJDl2WwU/giphy.gif" alt="Will Ferral in the movie Elf saying Santa's Coming!!" />
        </a>`;
          renderGif(box, gifHTML);
          break;
        case 11:
          swapContent;
          gifHTML = `<a href="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExaXk1MHczcWtwajk4c3JpeXkwcmp3YW5ldHJkZGU0MmFsbnlmYjJ6OCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o7TKN7Ia5pEEepdxS/giphy.gif" target="_blank">
        
        <img src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExaXk1MHczcWtwajk4c3JpeXkwcmp3YW5ldHJkZGU0MmFsbnlmYjJ6OCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o7TKN7Ia5pEEepdxS/giphy.gif" alt="Martin's dog Eddie from the show Frasier dressed in a Santa outfit and sitting on Martin's old chair in Frasiers apartent." />
        
        </a>
        `;
          renderGif(box, gifHTML);
          break;
        case 12:
          swapContent;
          gifHTML = `<a href="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExdGg0YmNsbjhlNTUwYzlmY2loMHU4NHAwbzhnZ2M2OXZ3Mmc2Zm93ZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l378kDZtofB27eNrO/giphy-downsized-large.gif" target="_blank">
        
        <img src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExdGg0YmNsbjhlNTUwYzlmY2loMHU4NHAwbzhnZ2M2OXZ3Mmc2Zm93ZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l378kDZtofB27eNrO/giphy-downsized-large.gif" alt="Will Ferral in Daddy's Home 2 putting up christmas decorations outside on his house when everything goes sideways and he ends up falling on to a car and destroting the car roof." />
        
        </a>
        `;
          renderGif(box, gifHTML);
          break;
        case 13:
          swapContent;
          gifHTML = `<a href="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExN2UxcmV5c2N3NW94Ymd1aGNxbWxweXoyaGhiNXc2ajc4NjFmZTAyOSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/oqzrGRMPfS3Yc/giphy.gif" target="_blank">
        
        <img src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExN2UxcmV5c2N3NW94Ymd1aGNxbWxweXoyaGhiNXc2ajc4NjFmZTAyOSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/oqzrGRMPfS3Yc/giphy.gif" alt="Charlie Brown tries to decorate his sad christmas tree. When he takes an ornament from Snoopy's dog house and tries to put it on his tree the tree bends and droops over" />
        
        </a>
        `;
          renderGif(box, gifHTML);
          break;
        case 14:
          swapContent;
          gifHTML = `<a href="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExMWFjNjBzcGl0cHVieWkyZXh3cm85d2VyMXBkdmVjeTZnemkyeWYybSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Wq22HfKZ0dV8Q/giphy.gif" target="_blank">
        
        <img src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExMWFjNjBzcGl0cHVieWkyZXh3cm85d2VyMXBkdmVjeTZnemkyeWYybSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Wq22HfKZ0dV8Q/giphy.gif" alt="Tim Allen in The Santa Clause movie. He's still skinny and putting Christmas preasents under a little girls Christmas tree and explains to her that he's watching his saturated fats." />
        
        </a>
        `;
          renderGif(box, gifHTML);
          break;
        case 15:
          swapContent;
          gifHTML = `<a href="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExaWo4dXEzbXdkZ2ZvNXZlc2Nta2g4cGVsOWo0NXZ2aWp2eWNuazN4MyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o6wrrKsbK9mKH7KaA/giphy.gif" target="_blank">
        
        <img src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExaWo4dXEzbXdkZ2ZvNXZlc2Nta2g4cGVsOWo0NXZ2aWp2eWNuazN4MyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o6wrrKsbK9mKH7KaA/giphy.gif" alt="Scene from Polar Express where Santa rides around the top of a giant Christmas tree, it lights up and then he fly's closely over a crowd of people." />
        
        </a>
        `;
          renderGif(box, gifHTML);
          break;
        case 16:
          swapContent;
          gifHTML = `<a href="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExOTMwY3B6Y3ZmNnJlZ21rN3phcXBhdW9yamFteXdwMHA5cm9ieXlwaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l29c52uHWfHIWPo2ap/giphy-downsized-large.gif" target="_blank">
        
          <img src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExOTMwY3B6Y3ZmNnJlZ21rN3phcXBhdW9yamFteXdwMHA5cm9ieXlwaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l29c52uHWfHIWPo2ap/giphy-downsized-large.gif" alt="Two cats wearing Christmas outfits. One of the cats is wearing jingle bells on his collar and the other cat is swatting at them." />
          
          </a>
          `;
          renderGif(box, gifHTML);
          break;
        case 17:
          swapContent;
          gifHTML = `<a href="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExeDdub3I1aGJxMGFtMHhpdDVweTF3Yzd4MXlseTRic2wxN254ZHI3MyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/9w475hDWEPVlu/giphy.gif" target="_blank">
        
        <img src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExeDdub3I1aGJxMGFtMHhpdDVweTF3Yzd4MXlseTRic2wxN254ZHI3MyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/9w475hDWEPVlu/giphy.gif" alt="Minions wearing Christmas attire and dancing." />
        
        </a>
        `;
          renderGif(box, gifHTML);
          break;
        case 18:
          swapContent;
          gifHTML = `<a href="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExeWIycDZ4ZXRsZ2tuNGl4Z3I5bGZsb2ZzaDBhc3I4Z2pyOHE0Nm42bCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/yGuJAW6zyzdLG7mKhB/giphy.gif" target="_blank">
        
        <img src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExeWIycDZ4ZXRsZ2tuNGl4Z3I5bGZsb2ZzaDBhc3I4Z2pyOHE0Nm42bCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/yGuJAW6zyzdLG7mKhB/giphy.gif" alt="The scene in Die Hard when Hans reads the blood on his henchmans shirt and it says, Now I have a machine gun. Ho-Ho-Ho" />
        
        </a>
        `;
          renderGif(box, gifHTML);
          break;
        case 19:
          swapContent;

          gifHTML = `<a href="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzJudm9zajV5NTV6NmxsbThvdTBseGFwamxhcWp0d2o0N2t5YmtwcSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/yAhVmsVDyPMGI/giphy.gif" target="_blank">
        
        <img src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzJudm9zajV5NTV6NmxsbThvdTBseGFwamxhcWp0d2o0N2t5YmtwcSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/yAhVmsVDyPMGI/giphy.gif" alt="Mickey Mouse and Pluto decorating a Christmas tree." />
        
        </a>
        `;
          renderGif(box, gifHTML);
          break;
        case 20:
          swapContent;
          gifHTML = `<a href="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExOGI0MmlpejBsZHA4YXp5NGl2aG10ZnIzaWFsYjZtNTUxY2FqcjI1MiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/yoJC2pg5f2YxxFw2pW/giphy.gif" target="_blank">
        
        <img src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExOGI0MmlpejBsZHA4YXp5NGl2aG10ZnIzaWFsYjZtNTUxY2FqcjI1MiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/yoJC2pg5f2YxxFw2pW/giphy.gif" alt="Dan Akroyd playing a homeless Santa in the movie Trading Places. He's pulling his beard down to take a sip of wine." />
        
        </a>
        `;
          renderGif(box, gifHTML);
          break;
        case 21:
          swapContent;
          gifHTML = `<a href="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExeTYyNmhhNTJiMmFuMHZsZW13cGoyazdkdGJ1dWc1dmhyMHlxMmwzaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l2YWDVBDEhAAJSeQg/giphy.gif" target="_blank">
        
        <img src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExeTYyNmhhNTJiMmFuMHZsZW13cGoyazdkdGJ1dWc1dmhyMHlxMmwzaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l2YWDVBDEhAAJSeQg/giphy.gif" alt="Evil Gremlins singing Christmas Carols" />
        
        </a>
        `;
          renderGif(box, gifHTML);
          break;
        case 22:
          swapContent;
          gifHTML = `<a href="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExZmdwMnAyZXEzcnFjM25kdnUwMTU3aWpnZnJ6b2Z6YnQyZHduaHV6dSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/KtrhyNGwNCSYM4pVRq/giphy.gif" target="_blank">
        
        <img src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExZmdwMnAyZXEzcnFjM25kdnUwMTU3aWpnZnJ6b2Z6YnQyZHduaHV6dSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/KtrhyNGwNCSYM4pVRq/giphy.gif" alt="Dog with Christmas lights glowing under his fur" />
        
        </a>
        `;
          renderGif(box, gifHTML);
          break;
        case 23:
          swapContent;
          gifHTML = `<a href="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExY2syeW1pbm16aml6cXVhMzdqaXpzYTl3bWEwM2dkNm91ZGVhNzFweSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o6wrB9PGI3Qn5Q16U/giphy.gif" target="_blank">
        
        <img src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExY2syeW1pbm16aml6cXVhMzdqaXpzYTl3bWEwM2dkNm91ZGVhNzFweSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o6wrB9PGI3Qn5Q16U/giphy.gif" alt="Santa getting up from kneeling to put a Christmas Present under the tree and you can see his plumbers butt." />
        
        </a>
        `;
          renderGif(box, gifHTML);
          break;
        case 24:
          swapContent;
          gifHTML = `<a href="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExd3Rqcm8ycXV0MHBtbmJkd3M1d2huMGJsaGM3aWl5ZWQ5ZHg5N21qcyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o6wrrn32NwP5EgpTG/giphy.gif" target="_blank">
        
          <img src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExd3Rqcm8ycXV0MHBtbmJkd3M1d2huMGJsaGM3aWl5ZWQ5ZHg5N21qcyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o6wrrn32NwP5EgpTG/giphy.gif" alt="Claymation Santa and his reindear flying in his sleigh while Santa waves" />
          
          </a>
          `;
          renderGif(box, gifHTML);
          break;
      }
      saveOpenedBox(i);
    } else {
      let modalContainer = document.getElementById("modal-container");
      let closeModal = document.getElementById("close");
      modalContainer.style.display = "flex";
      closeModal.addEventListener("click", () => {
        modalContainer.style.display = "none";
      });
    }
  });
}
