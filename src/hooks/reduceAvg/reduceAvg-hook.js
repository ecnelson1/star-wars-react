export const reducedAvg = (characters) => {
    const massArray= characters.filter((obj) => {
        return obj.mass !== "unknown";
    });
    massArray.forEach(char => char.mass = char.mass.replace(/,/, ''))
     const heightArray = characters.filter((obj) => {
       return obj.height !== "unknown";
     });

  const mass = Math.round(
      massArray.reduce(
          (sum, current) => {return sum + Number(current.mass)}, 0) 
          / massArray.length *100) / 100;

  const height = Math.round(
      heightArray.reduce(
          (sum, current) => {return sum + (Number(current.height))}, 0) 
          / heightArray.length *100) / 100;

  
  return [{mass, height}]
};
