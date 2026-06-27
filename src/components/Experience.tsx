import { ArrivalScene } from "@/components/scenes/ArrivalScene";
import { EnvelopeScene } from "@/components/scenes/EnvelopeScene";
import { EnvelopeOpeningScene } from "@/components/scenes/EnvelopeOpeningScene";
import { InvitationRevealScene } from "@/components/scenes/InvitationRevealScene";
import { InvitationUnfoldScene } from "@/components/scenes/InvitationUnfoldScene";
import { WelcomeScene } from "@/components/scenes/WelcomeScene";
import { StoryScene } from "@/components/scenes/StoryScene";
import { EventsScene } from "@/components/scenes/EventsScene";
import { VenueScene } from "@/components/scenes/VenueScene";
import { GalleryScene } from "@/components/scenes/GalleryScene";
import { CountdownScene } from "@/components/scenes/CountdownScene";
import { RSVPScene } from "@/components/scenes/RSVPScene";
import { ClosingScene } from "@/components/scenes/ClosingScene";

export function Experience() {
  return (
    <main className="relative">
      <ArrivalScene />
      <EnvelopeScene />
      <EnvelopeOpeningScene />
      <InvitationRevealScene />
      <InvitationUnfoldScene />
      <WelcomeScene />
      <StoryScene />
      <EventsScene />
      <VenueScene />
      <GalleryScene />
      <CountdownScene />
      <RSVPScene />
      <ClosingScene />
    </main>
  );
}
