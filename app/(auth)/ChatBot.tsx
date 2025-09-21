import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  FlatList,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

export default function ElloraCaveScreen() {
  const [chatVisible, setChatVisible] = useState(false);
  const [messages, setMessages] = useState<{ id: string; text: string; sender: string }[]>([]);
  const [input, setInput] = useState("");

  // Fake AI responses
  const aiReplies = [
    "Ellora Caves were built between the 6th and 10th century CE.",
    "Did you know? Cave 16 is the Kailasa temple, carved from a single rock!",
    "The caves include Buddhist, Hindu, and Jain monuments.",
    "Ellora is a UNESCO World Heritage Site in Maharashtra, India.",
    "The artwork at Ellora represents an incredible fusion of cultures.",
  ];

  const sendMessage = () => {
    if (!input.trim()) return;

    // Add user message
    const newMsg = { id: Date.now().toString(), text: input, sender: "user" };
    setMessages((prev) => [...prev, newMsg]);
    setInput("");

    // Simulate AI response with random text
    setTimeout(() => {
      const randomReply = aiReplies[Math.floor(Math.random() * aiReplies.length)];
      setMessages((prev) => [
        ...prev,
        { id: Date.now().toString(), text: randomReply, sender: "ai" },
      ]);
    }, 1000);
  };

  return (
    <View style={styles.container}>
      {/* Main content */}
      <Text style={styles.title}>Ellora Caves</Text>
      <Text style={styles.info}>Explore the beauty and history of Ellora Caves!</Text>

      {/* Chatbot toggle */}
      <TouchableOpacity style={styles.chatButton} onPress={() => setChatVisible(!chatVisible)}>
        <Text style={styles.chatButtonText}>💬 Chat with AI</Text>
      </TouchableOpacity>

      {/* Chat UI */}
      {chatVisible && (
        <KeyboardAvoidingView
          style={styles.chatContainer}
          behavior={Platform.OS === "ios" ? "padding" : undefined}
        >
          <FlatList
            data={messages}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View
                style={[
                  styles.messageBubble,
                  item.sender === "user" ? styles.userBubble : styles.aiBubble,
                ]}
              >
                <Text style={styles.messageText}>{item.text}</Text>
              </View>
            )}
          />

          {/* Input */}
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              value={input}
              onChangeText={setInput}
              placeholder="Type your message..."
              placeholderTextColor="#999"
            />
            <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
              <Text style={styles.sendButtonText}>➤</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  title: { fontSize: 26, fontWeight: "bold", marginBottom: 10 },
  info: { fontSize: 16, marginBottom: 20, color: "#555" },
  chatButton: {
    backgroundColor: "#007AFF",
    padding: 12,
    borderRadius: 8,
    alignSelf: "flex-start",
  },
  chatButtonText: { color: "#fff", fontWeight: "600" },
  chatContainer: {
    flex: 1,
    marginTop: 20,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 10,
    backgroundColor: "#f9f9f9",
  },
  messageBubble: {
    padding: 10,
    borderRadius: 10,
    marginVertical: 4,
    maxWidth: "80%",
  },
  userBubble: { backgroundColor: "#007AFF", alignSelf: "flex-end" },
  aiBubble: { backgroundColor: "#eee", alignSelf: "flex-start" },
  messageText: { color: "#000" },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    borderTopWidth: 1,
    borderColor: "#ddd",
    paddingTop: 5,
  },
  input: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#ccc",
    marginRight: 10,
  },
  sendButton: {
    backgroundColor: "#007AFF",
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 8,
  },
  sendButtonText: { color: "#fff", fontWeight: "bold" },
});
