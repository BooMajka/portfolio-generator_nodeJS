const profileDataArgs = process.argv.slice(2, process.argv.length);
console.log(profileDataArgs);
// Notice the lack of parentheses around the `profileDataArr` parameter?
profileDataArr.forEach(profileItem => console.log(profileItem));


  console.log("================");

  // Is the same as this...
  profileDataArr.forEach((profileItem) => {
    console.log(profileItem);
  });


printProfileData(profileDataArgs);