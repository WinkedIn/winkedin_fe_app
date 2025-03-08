import React, { useState } from "react";
import {
    View,
    ScrollView,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image,
    Platform,
    PermissionsAndroid,
    Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import config from "../../config";
import ProgressBar from "../../components/ProgressBar";
import AppButton from "../../components/AppButton";
import colors from "../../config/colors";
import { icons } from "../../assets/icons";
import { launchImageLibrary } from "react-native-image-picker";

const requestGalleryPermission = async () => {
    if (Platform.OS === "android") {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES ||
                PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
                {
                    title: "Gallery Access Permission",
                    message: "We need access to your gallery to upload photos.",
                    buttonNeutral: "Ask Me Later",
                    buttonNegative: "Cancel",
                    buttonPositive: "OK",
                }
            );
            return granted === PermissionsAndroid.RESULTS.GRANTED;
        } catch (err) {
            console.warn(err);
            return false;
        }
    }
    return true;
};

const PhotoVerify: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [selectedPrompt, setSelectedPrompt] = useState<string | null>(null);

    const [selectedImages, setSelectedImages] = useState<(string | null)[]>([null, null, null, null]);

    const handleImagePick = async (index: number) => {
        const hasPermission = await requestGalleryPermission();
        if (!hasPermission) {
            Alert.alert("Permission Denied", "You need to allow access to the gallery.");
            return;
        }

        launchImageLibrary({ mediaType: "photo", quality: 1 }, (response) => {
            if (response.assets && response.assets.length > 0) {
                const newImages: any = [...selectedImages];
                newImages[index] = response.assets[0].uri;
                setSelectedImages(newImages);
            }
        });
    };

    const components: JSX.Element[] = [
        <View key="1" style={styles.habitContainer}>
            <Text style={styles.title}>Let's see that million-dollar smile!</Text>
            <Text style={styles.txtSubTitle}>Your best look</Text>
            <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>

                <View style={styles.gridContainer}>
                    {selectedImages.map((imageUri, index) => (
                        <TouchableOpacity key={index} style={styles.box} onPress={() => handleImagePick(index)}>
                            {imageUri ? (
                                <Image source={{ uri: imageUri }} style={styles.uploadedImage} />
                            ) : (
                                <Image source={icons.icnAdd} style={styles.addIcon} />
                            )}
                        </TouchableOpacity>
                    ))}
                </View>

            </ScrollView>
        </View>,
    ];

    const progressIncrement: number = 90 / components.length;

    return (
        // <SafeAreaView
        //     style={{
        //         flex: 1,
        //         backgroundColor: config.colors.white,
        //     }}
        // >
            <View
                style={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    // gap: 40,
                    // marginTop: 20,
                    alignItems: "center",
                    width: "100%",
                }}
            >
                {/* <ProgressBar progress={20 + currentIndex * progressIncrement} /> */}
                {/* <ScrollView style={{ flex: 1, width: "90%" }} showsVerticalScrollIndicator={false}> */}
                    {components[currentIndex]}
                {/* </ScrollView> */}
            </View>

           
        // </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    habitContainer: {
        flexDirection: "column",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginTop: 10,
        marginBottom: 10,
    },
    txtSubTitle: {
        fontSize: 12,
        color: "#303D47",
    },
    scrollView: {
        width: "100%",
    },
    gridContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        paddingVertical: 10,
    },
    box: {
        width: "45%",   // Width remains responsive
        height: 190,    // Manually set a height (change as needed)
        borderWidth: 1,
        borderStyle: "dashed",
        borderColor: "gray",
        borderRadius: 24,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 10,
    },
    
    bottomContainer: {
        width: "100%",
        marginBottom: 20,
    },
    nextButton: {
        paddingHorizontal: 70,
    },
    uploadedImage: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",
        borderRadius:24
    },
    addIcon: {
        width: 30,
        height: 30,
        tintColor: "gray",
    },
});

export default PhotoVerify;
