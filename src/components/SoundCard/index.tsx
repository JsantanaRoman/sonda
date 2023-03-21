import { Slider } from "@miblanchard/react-native-slider";
import { Audio, AVPlaybackSource } from "expo-av";
import * as Haptics from "expo-haptics";
import { Image } from "expo-image";
import { useEffect, useRef, useState } from "react";
import { Pressable, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "_store";
import { Colors } from "_styles";
import styles from "./styles";

export type Props = {
  name: string;
  index?: number;
  soundPath: AVPlaybackSource;
  available: boolean;
};

const SoundCard: React.FC<Props> = ({ name, available, soundPath }) => {
  const [isloaded, setIsLoaded] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0);
  const sound = useRef(new Audio.Sound());
  const { playAll } = useSelector((state: RootState) => state.playAll);

  useEffect(() => {
    if (!isloaded) {
      loadAudio();
      setIsLoaded(true);
    }

    if (volume > 0 && playAll) {
      playAudio();
    }

    if (volume > 0 && !playAll) {
      pauseAudio();
    }
  }, [playAll]);

  const loadAudio = async () => {
    await sound.current.loadAsync(soundPath);
    await sound.current.setStatusAsync({ volume: 0 });
  };

  const playAudio = async () => {
    sound.current.playAsync();
    sound.current.setStatusAsync({ isLooping: true });
    setPlaying(true);
  };

  const pauseAudio = async () => {
    sound.current.pauseAsync();
    setPlaying(false);
  };

  return (
    <View>
      {!available && (
        <>
          <Pressable
            style={styles.lockContainer}
            onPress={() => {
              Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
              console.log("Modal PopUp");
            }}
          >
            <Image
              style={styles.lockIcon}
              contentFit="contain"
              source={require("../../assets/images/lock.svg")}
            />
          </Pressable>
          <View style={styles.locked}></View>
        </>
      )}
      <View style={styles.card}>
        <View>
          <Text style={styles.cardHeading}>{name}</Text>
        </View>
        <View style={styles.audioContainer}>
          <Pressable
            style={styles.audioButton}
            onPress={async () => {
              Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
              playing ? pauseAudio() : playAudio();
            }}
          >
            <Image
              style={styles.buttonIcon}
              contentFit="contain"
              source={
                playing
                  ? require("../../assets/images/volume-on.svg")
                  : require("../../assets/images/volume-off.svg")
              }
            />
          </Pressable>
          <View style={styles.sliderContainer}>
            <Slider
              value={volume}
              // @ts-ignore
              onValueChange={(value: Array<number>) => {
                sound.current.setStatusAsync({ volume: value[0] });
                setVolume(Number(value[0]));
              }}
              animateTransitions={true}
              trackStyle={styles.trackStyle}
              minimumTrackTintColor={Colors.PRIMARY}
              maximumTrackTintColor={"#242424"}
              thumbStyle={styles.thumbStyle}
              minimumValue={0}
              maximumValue={1}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default SoundCard;
