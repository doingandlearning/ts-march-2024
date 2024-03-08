type Optional<SomethingElse> = SomethingElse | null;

// Already have a type ...

// Awaited
const prom = async () => "Hello";

const result = prom();
type PromiseResult = Awaited<typeof result>; // Promise<string>

// typeof ... Typing layer - accurate typescript types!
//        ... Value layer - JS type!

console.log(typeof result); // object

// Extract
type NotificationSettings = "email" | "browser"; // string
type FilteredSettings = Extract<
  NotificationSettings,
  "email" | "sms" | "whatsapp"
>;

// Exclude
type FilteredSettings2 = Exclude<
  NotificationSettings,
  "email" | "sms" | "whatsapp"
>;

interface Todo {
  title: string;
  description: string;
  completed?: boolean;
}

type FullTodo = Required<Todo>;
type OptionalTodo = Partial<FullTodo>;

type Regions = Partial<Record<"se" | "ne" | "scotland" | "ni", string[]>>;

const headlines: Regions = {
  ne: ["It is raining"],
};

function add(a: number, b: number) {
  return a + b;
}

type ReturnOfAdd = ReturnType<typeof add>;
type ParamasOfAdd = Parameters<typeof add>;
