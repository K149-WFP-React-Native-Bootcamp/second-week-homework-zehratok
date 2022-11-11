import { Dimensions, StyleSheet } from "react-native";

var fullWidth = Dimensions.get("window").width; //full width
var fullHeight = Dimensions.get("window").height; //full height
var color = "#FFFFC1";
var color1 = "#8A79AF";
var color2 = "#FFD2A5";
var color3 = "#D38CAD";


const styles = StyleSheet.create({
    container: {
        display: "flex", 
        flex: 1, 
        backgroundColor: color, 
        justifyContent: "center", //yatayda ortala
        alignItems: "center", //dikeyde ortala
    }, 
    header: {
        backgroundColor: color1, 
        width: fullWidth, //header componentinin genişliğini full width olarak ayarlıyoruz
        height: 0.08 * fullHeight, //header componentinin yüksekliğini 0.08 ile çarpıp full height olarak ayarlıyoruz
        justifyContent: "center", //yatayda ortala
        alignItems: "center", //dikeyde ortala
    },
    header_text: {
        color: color,
        fontSize: 0.04 * fullHeight, //header textinin font size'ını 0.04 ile çarpıp full height olarak ayarlıyoruz
        fontWeight: "bold", //header textinin kalınlığını bold olarak ayarlıyoruz
    },
    formContainer: {
        backgroundColor: color2,
        width: fullWidth, //formContainer componentinin genişliğini full width olarak ayarlıyoruz
        height: 0.37 * fullHeight, //formContainer componentinin yüksekliğini 0.37 ile çarpıp full height olarak ayarlıyoruz
        justifyContent: "center", //yatayda ortala
        alignItems: "center", //dikeyde ortala
    },
    input_title: {
        textAlignVertical: "top", //inputun başlığının yukarıda tutulmasını sağlıyoruz
        width: 0.8 * fullWidth, //input genişliğini 0.8 ile çarpıp full width olarak ayarlıyoruz
        height: 0.075 * fullHeight, //input yüksekliğini 0.075 ile çarpıp full height olarak ayarlıyoruz
        backgroundColor: color,
        borderRadius: 0.01 * fullHeight, //input border radius'ını 0.01 ile çarpıp full height olarak ayarlıyoruz
        padding: 0.01 * fullHeight, 
        marginBottom: 0.015 * fullHeight, //inputun altına boşluk bırakmak için marginBottom ayarlıyoruz
        color: color1,
        fontSize: 0.045 * fullWidth, //input font size'ını 0.045 ile çarpıp full width olarak ayarlıyoruz
        fontWeight: "bold",
    },
    input_description: {
        textAlignVertical: "top", 
        width: 0.8 * fullWidth,
        height: 0.15 * fullHeight,
        backgroundColor: color,
        borderRadius: 0.01 * fullHeight,
        padding: 0.01 * fullHeight,
        marginBottom: 0.015 * fullHeight, 
        color: color1,
        fontSize: 0.04 * fullWidth,
        fontWeight: "bold",
    },
    button: {
        width: 0.4 * fullWidth, //button genişliğini 0.4 ile çarpıp full width olarak ayarlıyoruz
        height: 0.075 * fullHeight, //button yüksekliğini 0.075 ile çarpıp full height olarak ayarlıyoruz
        backgroundColor: color3,
        borderRadius: 0.01 * fullHeight,
        justifyContent: "center", //yatayda ortala
        alignItems: "center", //dikeyde ortala
    },
    button_text: {
        color: color, 
        fontSize: 0.03 * fullHeight,
        fontWeight: "bold",
    },
    flatlist_container: {
        backgroundColor: color2,
        height: 0.55 * fullHeight, //flatlist container'ının yüksekliğini 0.55 ile çarpıp full height olarak ayarlıyoruz
        width: fullWidth, //flatlist container'ının genişliğini full width olarak ayarlıyoruz
        flex: 1,
    },
    flatlist_item: {
        backgroundColor: color1,
        width: 0.8 * fullWidth,
        height: 0.15 * fullHeight,
        borderRadius: 0.01 * fullHeight,
        padding: 0.01 * fullHeight,
        marginVertical: 0.01 * fullHeight, //flatlist item'larının arasına boşluk bırakmak için marginVertical ayarlıyoruz
        marginHorizontal: 0.1 * fullWidth, //flatlist item'larının yatayda ortalanması için marginHorizontal ayarlıyoruz
        maxHeight: 0.15 * fullHeight, //flatlist item'larının yüksekliğini 0.15 ile çarpıp full height olarak ayarlıyoruz
    },
    flatlist_item_title: {
        color: color,
        fontSize: 0.03 * fullHeight,
        fontWeight: "bold", 
        padding: 0.005 * fullHeight,
    },
    flatlist_item_description: {
        color: color,
        fontSize: 0.02 * fullHeight,
        maxHeight: 0.09 * fullHeight, //flatlist item'larının içindeki description'ın yüksekliğini 0.1 ile çarpıp full height olarak ayarlıyoruz
        padding: 0.005 * fullHeight, //flatlist item'larının içindeki description'ın padding ayarlıyoruz
    },

});

export default styles;