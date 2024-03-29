{
  // Record!

  // Dictionary Type
  interface API_RESULT {
    [name: string]: {
      role: string;
      team: string;
    };
  }

  interface SET_RESULT {
    jack: {
      role: string;
      team: string;
    };
    james: {
      role: string;
      team: string;
    };
    sidarth?: {
      role: string;
      team: string;
    };
  }

  const result: API_RESULT = {
    jack: { role: "grad swe", team: "sounds catalogue" },
    james: { role: "grad swe", team: "news labs" },
  };

  result.sidarth = { role: "swe", team: "news app" };
}
