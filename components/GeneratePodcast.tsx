import { GeneratePodcastProps } from "@/types";
import React from "react";
import { Label } from "./ui/label";

const GeneratePodcast = ({
  setAudioStorageId,
  setAudio, 
  voiceType,
  audio,
  voicePrompt,
  setVoicePrompt,
  setAudioDuration,

}: GeneratePodcastProps) => {
    return (
      <div>
        <div className="flex flex-col gap-2.5">
          <Label className="text-16 font-bold text-white-1">
            AI Prompt to generate Podcast
          </Label>
        </div>
      </div>
    )
};

export default GeneratePodcast;