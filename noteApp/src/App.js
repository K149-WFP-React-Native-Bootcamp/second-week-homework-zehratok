import { ScrollView, View, Text, TextInput, FlatList, TouchableOpacity, SafeAreaView } from 'react-native'
import React from 'react'
import styles from './App.style'

const App = () => {

    const [title, setTitle] = React.useState('') // not başlığı için state. ilk inputtan gelen değer buraya atanacak
    const [description, setDescription] = React.useState('') // not açıklaması için state. ikinci inputtan gelen değer buraya atanacak
    const [notes, setNotes] = React.useState([]) // notes adlı array için state. bu bizim datamız olacak
    const [id, setId] = React.useState(0) // not id için state. her not için unique bir id oluşturacağız

    function addNote() { // butona basıldığında çalışacak fonksiyonu oluşturuyoruz
        setNotes([...notes, { title: title, description: description, id: id }]) // notes adlı array'e başlık ve açıklama ve id değerlerini ekliyoruz.
        setId(id + 1) // id değerini 1 arttırıp setId ile güncelliyoruz ki her yeni not için unique bir id oluşturmuş olalım.
        console.log(notes) // notes array'ini kontrol amaçlı konsola yazdırıyoruz
    }
    return (
        <SafeAreaView style={styles.container} >  
            <View style={styles.header}>  
                <Text style={styles.header_text}>NOTES</Text>
            </View>
            <View style={styles.formContainer}> 
                <TextInput 
                    style={styles.input_title}
                    placeholder="Add a note tittle" 
                    value={title} // title state'ini input'a bağlıyoruz
                    onChangeText={text => setTitle(text)} // inputtan gelen değerle title state'ini güncelliyoruz
                /> 
                <TextInput
                    style={styles.input_description}
                    placeholder="Add a note description" 
                    multiline // multiline eklediğimizde input alanı birden fazla satırda yazılabilir hale geliyor
                    value={description} // inputtan gelen değeri description state'ine atıyoruz 
                    onChangeText={text => setDescription(text)} // inputtan gelen değerle description state'ini güncelliyoruz
                /> 
                <TouchableOpacity style={styles.button} onPress={addNote} // butona basıldığında addNote fonksiyonunun çalıştırılmasını sağlıyoruz
                >
                    <Text style={styles.button_text}>Add Note</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.flatlist_container}>
                <FlatList // FlatList componentini kullanarak notes array'ini ekrana yazdırıyoruz
                    data={notes} // notes array'ini data olarak gönderiyoruz
                    renderItem={({ item }) => ( // renderItem ile her bir item için bir view oluşturuyoruz. item burada notes array'indeki her bir elemanı temsil ediyor
                        <View style={styles.flatlist_item}>  
                            <Text style={styles.flatlist_item_title}>{item.title}</Text>
                            <Text style={styles.flatlist_item_description}>{item.description}</Text>
                        </View>
                    )} // renderItem ile oluşturduğumuz view içerisine not başlığını ve açıklamasını yazdırıyoruz
                    keyExtractor={item => item.id.toString()} // her bir item için unique bir key oluşturuyoruz. burada id değerini stringe çevirip key olarak gönderiyoruz
                />
            </View>
        </SafeAreaView>
    )
}

export default App