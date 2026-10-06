import express from 'express';
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello, World!');
});
app.get('/api/students', (req, res) => {
  //res.json({ message: 'List of students' });
});
app.get('/api/students/:id', (req, res) => {
    //res.json({ message: `Details of student with ID ${req.params.id}` });
});
app.post('/api/students', (req, res) => {
    //res.json({ message: 'Student created', data: req.body });
});
app.put('/api/students/:id', (req, res) => {
    //res.json({ message: `Student with ID ${req.params.id} updated`, data: req.body });
});
app.delete('/api/students/:id', (req, res) => {
    //res.json({ message: `Student with ID ${req.params.id} deleted` });
});


app.listen(3000, () => {
  console.log('Server is running on port 3000');
});