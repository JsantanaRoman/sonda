import { Image } from "expo-image";
import { FlatList, ScrollView, Text, View } from "react-native";
import { Mixins } from "_styles";
import { Constants } from "_utils";
import styles from "./style";

const About = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headingContainer}>
        <View style={styles.headingContainerLeft}>
          <Text style={styles.headingTextLeft}>100%</Text>
        </View>
        <View style={styles.headingContainerRight}>
          <Text style={styles.headingTextRightOne}>
            Independent Bootstrapped
            {"\n"}
            <Text style={styles.headingTextRightTwo}>De aquí</Text>
          </Text>
        </View>
      </View>
      <Text style={styles.sondaText}>Son • da</Text>
      <Text style={styles.sondaSubText}>
        (noun) abbreviation for Sonidos de aquí
      </Text>
      <Text style={styles.sondaDescription}>
        Sonda was created as an experiment to bring people closer to the island
        and its culture. Our idea behind this app is to use these sounds as a
        way to relax, focus, or simply transport oneself to the tropical
        paradise that is Puerto Rico.
        {"\n"}
        {"\n"}
        The concept of using white noise and ambient sounds to promote
        relaxation and well-being is not new, but we take this idea one step
        further by incorporating the unique sounds from our island into the mix.
        By doing so, Sonda aims to not only provide a soothing auditory
        experience, but also to connect people to the island and its culture in
        a meaningful way.
        {"\n"}
        {"\n"}
        Whether you are from Puerto Rico or simply looking to escape to a
        tropical paradise for a little while, Sonda offers a unique and
        immersive way to do so.
      </Text>
      <Text style={styles.sectionHeading}>Makers</Text>
      <FlatList
        contentContainerStyle={{ marginBottom: 40 }}
        scrollEnabled={false}
        numColumns={2}
        data={Constants.makersList}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View
            style={[
              {
                width: Mixins.containerSize(2, 32),
              },
              styles.makersBox,
            ]}
          >
            <Image source={item.image} style={styles.makersImage} />
            <Text style={styles.makersName}>{item.name}</Text>
            <Text style={styles.makersRole}>{item.role}</Text>
          </View>
        )}
      />
      <View style={styles.centerContainer}>
        <Text style={styles.madeBy}>M</Text>
        <Text style={styles.madeBy}>A</Text>
        <Text style={styles.madeBy}>D</Text>
        <Text style={styles.madeBy}>E</Text>
        <View style={{ height: 8 }}></View>
        <Text style={styles.madeBy}>B</Text>
        <Text style={styles.madeBy}>Y</Text>
      </View>
      <View style={styles.centerContainer}>
        <Image
          source={require("../../../assets/images/logo-orange.png")}
          style={styles.bottomLogo}
        />
      </View>
      <View style={styles.copyrightContainer}>
        <Text style={styles.copyrightText}>© Sonda 2023</Text>
        <Text style={styles.copyrightText}>usasonda.com</Text>
      </View>
    </ScrollView>
  );
};

export default About;
