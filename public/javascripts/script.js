for (let i = 0; i < mashPotatoes.length; i++) {
  console.log(mashPotatoes[i]);
}

addFood(steak[0], "#steak", () => {
  addFood(steak[1], "#steak", () => {
    addFood(steak[2], "#steak", () => {
      addFood(steak[3], "#steak", () => {
        addFood(steak[4], "#steak", () => {
          addFood(steak[5], "#steak", () => {
            addFood(steak[6], "#steak", () => {
              addFood(steak[7], "#steak", () => {});
            });
          });
        });
      });
    });
  });
  document.querySelector("#table").innerHTML +='<img src="public/images/steak.jpg" />';
});

addFood(mashPotatoes[0], "#mashPotatoes").then(() => {
  addFood(mashPotatoes[1], "#mashPotatoes").then(() => {
    addFood(mashPotatoes[2], "#mashPotatoes").then(() => {
      addFood(mashPotatoes[3], "#mashPotatoes").then(() => {
        addFood(mashPotatoes[4], "#mashPotatoes").then(() => {});
      });
    });
  });

  document.querySelector("#table").innerHTML += `<img src="public/images/mashPotatoes.jpg" />`;
});

async function makeFood(steps, id) {
  for (let step of steps) {
    try {
      await addFood(step, id);
    } catch (err) {
      console.log(err);
    }
  }

  document.querySelector("#table").innerHTML += `<img src="public/images/brusselSprouts.jpg" />`;
}


