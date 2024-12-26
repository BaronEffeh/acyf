import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  Paper,
} from "@mui/material";

function Comments() {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };

  return (
    <Box sx={{ my: 5, px: 2 }}>
      <Typography variant="h4" gutterBottom>
        Comments
      </Typography>
      <Box sx={{ display: "flex", gap: 2, mb: 4 }}>
        <TextField
          label="Leave a comment"
          variant="outlined"
          fullWidth
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <Button variant="contained" onClick={handleAddComment}>
          Post
        </Button>
      </Box>
      <List>
        {comments.map((comment, index) => (
          <ListItem key={index} sx={{ mb: 2 }}>
            <Paper elevation={2} sx={{ p: 2, width: "100%" }}>
              <ListItemText primary={comment} />
            </Paper>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default Comments;
