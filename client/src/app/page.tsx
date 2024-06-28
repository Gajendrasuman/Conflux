import { StoreProvider } from "@/store/StoreProvider";
import Navbar from "@/components/global/navigation/navigation"

export default function Home() {
  return (
    <StoreProvider>
      <Navbar />
      <h1 className="w-fit h-fit text-5xl uppercase font-bold tracking-wide tracking-word-wide mx-auto mt-32">Conflux</h1>
      <p className="w-1/2 h-fit font-semibold tracking-wide tracking-word-wide mx-auto mt-5">
        Conflux is a comprehensive web application designed to streamline the process of creating, managing, and attending events. This system includes features such as event creation and management, ticket booking, user registration, calendar integration, notifications, and an analytics dashboard.
      </p>
    </StoreProvider>
  );
}