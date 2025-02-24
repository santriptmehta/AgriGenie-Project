import {
  AppBar,
  Box,
  IconButton,
  Typography,
  InputBase,
  Paper,
  ThemeProvider,
  createTheme,
  CssBaseline,
  Button,
  Container,
  colors,
} from "@mui/material"
import {
  Menu as MenuIcon,
  Share as ShareIcon,
  Add as AddIcon,
  Search as SearchIcon,
  Place as PlaceIcon,
  Mic as MicIcon,
  ThumbUp,
  ThumbDown,
  ContentCopy as CopyIcon,
  ExpandMore as ExpandMoreIcon,
  SmartToy as BotIcon,
} from "@mui/icons-material"
import { Send, SendIcon } from "lucide-react"
import { useState } from "react";
import ReactMarkdown from "react-markdown";


const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#2c2c2c",
      paper: "#2c2c2c",
    },
    primary: {
      main: "#ffffff",
    },
  },
})

function App(){
  const [messages, setMessages] = useState([
    { text: "Hi!", sender: "user" },
    { text: "Hey Santript! How's it going? I'll be coming soon!", sender: "bot" },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { text: input, sender: "user" }];
    setMessages(newMessages);
    setInput("");

    try {
      const response = await fetch("http://localhost:8080/api/chatbot/ask", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: input }),
      });

      const data = await response.json();
      setMessages([...newMessages, { text: data.botResponse, sender: "bot" }]);
    } catch (error) {
      console.error("Error communicating with the backend:", error);
    }
  };
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box sx={{ height: "100vh", display: "flex", flexDirection: "column" }}>
        {/* Top Navigation */}
        <AppBar position="static" sx={{ backgroundColor: "background.default" }}>
          <Box sx={{ display: "flex", justifyContent: "space-between", p: 1, alignItems: "center" }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <IconButton color="inherit">
                <MenuIcon />
              </IconButton>
              <IconButton color="inherit">
                <BotIcon />
              </IconButton>
              <Button color="inherit" endIcon={<ExpandMoreIcon />} sx={{ textTransform: "none" }}>
              AgriGenie
              </Button>
            </Box>
            <Button color="inherit" startIcon={<ShareIcon />} sx={{ textTransform: "none" }}>
              Share
            </Button>
          </Box>
        </AppBar>

        {/* Chat Area */}
        <Container maxWidth="md" sx={{ flexGrow: 1, py: 4, overflowY: "auto" }}>
          {messages.map((msg, index) => (
            <Paper
              key={index}
              sx={{
                p: 2,
                mb: 2,
                backgroundColor: msg.sender === "user" ? "background.default" : "background.paper",
                alignSelf: msg.sender === "user" ? "flex-end" : "flex-start",
                maxWidth: "80%",
              }}
            >
              {msg.sender === "bot" ? (
                <ReactMarkdown>{msg.text}</ReactMarkdown>
              ) : (
                <Typography color="inherit">{msg.text}</Typography>
              )}

              {msg.sender === "bot" && (
                <Box sx={{ display: "flex", gap: 1, mt: 2 }}>
                  <IconButton size="small">
                    <CopyIcon fontSize="small" />
                  </IconButton>
                  <IconButton size="small">
                    <ThumbUp fontSize="small" />
                  </IconButton>
                  <IconButton size="small">
                    <ThumbDown fontSize="small" />
                  </IconButton>
                </Box>
              )}
            </Paper>
          ))}
        </Container>

        {/* Input Area */}
        <Box sx={{ p: 2, backgroundColor: "background.default" }}>
          <Container maxWidth="md">
            <Paper
              sx={{
                p: "2px 4px",
                display: "flex",
                flexDirection: "column",
                gap: 1,
                backgroundColor: "background.paper",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", p: 1 }}>
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Message AgriGenie"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                />
                <IconButton onClick={sendMessage}>
                  <Send />
                </IconButton>
                <IconButton>
                  <AddIcon />
                </IconButton>
                <IconButton>
                  <MicIcon />
                </IconButton>
              </Box>
              <Box sx={{ display: "flex", gap: 1, px: 2, pb: 1 }}>
                <Button size="small" startIcon={<SearchIcon />} sx={{ textTransform: "none", color: "text.secondary" }}>
                  Search
                </Button>
                <Button size="small" startIcon={<PlaceIcon />} sx={{ textTransform: "none", color: "text.secondary" }}>
                  Reason
                </Button>
              </Box>
            </Paper>
            <Typography variant="caption" align="center" sx={{ display: "block", mt: 1, color: "text.secondary" }}>
              AgriGenie can make mistakes. Check important info.
            </Typography>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App
