{
  // record!

  const result = {
    "jack": { role: "grad", team: "sounds"},
    "james": { role: "team lead", team: "iplayer" }
  }

  // but I can't then do
  // result.alice = { role: "team lead", team: "iplayer" }

  // so instead I can do 
  interface API_RESULT {
    [name: string]: {
      role: string,
      team: string
    }
  }
}