import { useState } from 'react';
import { StyleSheet, View, Button, TextInput, Modal, Image } from 'react-native';

function GoalInput(props) {

    // managing the state of enteredGoalText
    const [enteredGoalText, setEnteredGoalText] = useState('');

    // update the state to enteredText from TextInput
    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    }

    // passing and resetting enteredGoalText
    function addGoalHandler() {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    }

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>

                <Image 
                    style={styles.image}
                    source={require('../assets/images/goal.png')}
                /> 

                {/* set value to enteredGoal Text and onChangeText to goalInputHandler */}

                <TextInput
                    style={styles.textInput}
                    placeholder='Your course goal'
                    onChangeText={goalInputHandler}
                    value={enteredGoalText}
                />

                <View style={styles.buttonContainer}>

                    {/* on button press calling addGoalHandler which passes enteredGoalText */}

                    <View style={styles.button}>
                        <Button
                            title='Add Goal'
                            onPress={addGoalHandler}
                            color='#b180f0'
                        />
                    </View>

                    {/* on button press calling onCancel which filters through the array  */}

                    <View style={styles.button}>
                        <Button
                            title='Cancel'
                            onPress={props.onCancel}
                            color='#f31282'
                        />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#311b6b',
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#e4d0ff',
        backgroundColor:'#e4d0ff',
        width: '100%',
        padding: 12,
        color: '#120438',
        borderRadius: 6,
    },
    buttonContainer: {
        marginTop: 16,
        flexDirection: 'row',
    },
    button: {
        width: 100,
        marginHorizontal: 8,
    }, 
    image: {
        width: 100,
        height: 100,
        margin: 20,
    }
});
