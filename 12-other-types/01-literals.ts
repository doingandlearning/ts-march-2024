const body = `<html>${"name".toUpperCase()}</html>`;

type World = "world" | "BBC" | "Netflix";
type Hello = "Hello" | "Bonjour";
type Goodbye = "Goodbye" | "Au revoir";

type Greeting = Hello | Goodbye;

type Salutation = `${Greeting} ${World}`;

type domains = "iplayer" | "sport" | "news";
type allowed_subdomains = `https://${domains}.bbc.co.uk`;
type allowed_paths = `https://bbc.co.uk/${domains}`;
