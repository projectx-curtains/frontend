import { useField } from "formik";
import TextField from "@mui/material/TextField";

export const CustomerInput = (props: any) => {
  const [field] = useField(props);
  return (
    <TextField
      {...field}
      {...props}
      fullWidth={true}
      sx={{
        "& .MuiInputBase-input": {
          padding: "10px 16px",
        },
      }}
    />
  );
};

export const CommentInput = (props: any) => {
  const [field] = useField(props);
  return (
    <TextField
      placeholder="Комментарий"
      {...field}
      {...props}
      multiline
      rows={3}
    />
  );
};
