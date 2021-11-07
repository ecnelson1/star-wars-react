export const reducedAvg = (characters) => {
    const massArray= characters.filter((obj) => {
        return obj.mass !=='unknown';
    });
     const heightArray = characters.filter((obj) => {
       return obj.height !== "unknown";
     });
    console.log("masses", massArray)
    console.log('heights', heightArray)
  const mass = Math.round(massArray.reduce((sum, current) => {return sum + (Number(current.mass))}, 0) / massArray.length *100)/100;
  const height = Math.round(heightArray.reduce((sum, current) => {return sum + (Number(current.height) || '')}, 0) / heightArray.length *100)/100;
  console.log('massAvg', mass)
  console.log('heightAvg', height)
  return [{mass, height}]
};
