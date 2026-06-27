export type SceneId =
  | "arrival"
  | "envelope"
  | "envelope-opening"
  | "invitation-reveal"
  | "invitation-unfold"
  | "welcome"
  | "story"
  | "events"
  | "venue"
  | "gallery"
  | "countdown"
  | "rsvp"
  | "closing";

export interface SceneState {
  id: SceneId;
  progress: number;
}
