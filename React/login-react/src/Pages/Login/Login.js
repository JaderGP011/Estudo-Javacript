import React, {useState} from 'react';
import { Container, Form } from './styles';
import Botao from '../../Components/Botao/Botao';
import Input from '../../Components/input/Input';
import { validarEmail, validarSenha } from '../../Utils/Validadores';
import UserServices from '../../Services/userServices';
import { NavLink, useNavigate } from 'react-router-dom';
/*------------------------------------------ARRUMAR ARQUIVO DE IMPORTS-------------------------------------------------------------- */

const UserService = new UserServices();

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  // Botão
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      const response = await UserService.login(Form)
      console.log("response do login: ", response);
      if (response === true ) {
        alert("usuário logado com sucesso.")
        navigate('/home');
      }
      alert('Login');
      setLoading(false);
    } catch (err) {
      alert('Deu ruim' + err);
    }
  };

  // Validador de input
  const validadorInput = () => {
    return validarEmail(formData.email) && validarSenha(formData.senha);
  };

  const handleChange = (event) => {
    console.log('Digitando... ', event.target.name, event.target.value);
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  console.log('Form válido? ', validadorInput());



  return (
    <Container>
      <Form>
        <Input
          name="name"
          placeholder="Digite seu nome de usuário"
          onChange={handleChange}
          type="text"
        />
        <Input
          name="Email"
          placeholder="Digite seu Email"
          onChange={handleChange}
          type="email"
        />
        <Input
          name="senha"
          placeholder="Digite sua senha"
          onChange={handleChange}
          type="password"
        />
        <Botao 
            type = 'submit'
            text = 'Entrar'
            onClick = {handleSubmit}
            disabled = {loading === true || !validadorInput()}
        />
        <h1>Faça o seu login</h1>
        <div>
          <p>Não possui conta</p>
          <p>Cadastrar</p>
        </div>
      </Form>
    </Container>
  );
};

export default Login; //tudo que não for export default se importa entre chaves{}
