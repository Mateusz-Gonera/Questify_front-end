//Rejestracja

export const RegisterForm = () => {
  const [signup] = useRegisterMutation();
  const navigate = useNavigate();
 
  const handleSubmit = async evt => {
    const form = evt.target;
    const {
      email: { value: email },
      password: { value: password },
    } = form;

    const credentials = { email, password };

    evt.preventDefault();

    await signup(credentials)
      .unwrap()
      .then(() => navigate('/'))
      .catch(() => {
        toast.warn('User with this email address already exists', {
  icon: "🦄",  theme: "dark"
});
      });

    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off" >
      <div >Please Sign In</div>
      <label >
        <input
          placeholder="Email"
          type="email"
          name="email"
          autoComplete="off" 
        />
      </label>
      <label >
        <input
          placeholder="Password"
          type="password"
          name="password"
          autoComplete="off" 
        />
      </label>
      <button type="submit">
        Register
      </button>
    </form>
  );
};
    
//Logowanie
export const LoginForm = () => {

  const [login] = useLoginMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  
  const handleSubmit = evt => {
    const form = evt.target;
    const {
      email: { value: email },
      password: { value: password },
    } = form;

    const credentials = { email, password };
    evt.preventDefault();
     login(credentials)
      .unwrap()
      .then(({ accessToken,sid,refreshToken,
userData: { email, id, cards }, }) => localStorage.setItem('token', accessToken))
      .catch(() => {
        toast.warn('Please check your email address or password',{
  icon: "🦄",  theme: "dark"
});
      });

    const token = localStorage.getItem('token');
   dispatch(login(token))
    navigate('/');

    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="current-password" >
      <div>Please Log In</div>
      <input
        placeholder="Email"
        type="email"
        name="email"
        //pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"

      />
      <label >
      </label>
      <label>
        <input
          placeholder="Password"
          type="password"
          name="password"
        />
      </label>
      <button type="submit">LOG IN</button>
    </form>
  );
};

//Modal

export const Modal = ({open, modalLable, children, custom_modal, onClose}) => {

  const handleClose = (e) => {
    if(e.target.className === 'modalContainer'){
      onClose()
    }
    return null
  }

  if(open) {
    return (
      <div className='modalContainer' onClick={handleClose}>
        <div className= {`modal ${custom_modal}`}>
          <div className='modal__head'>
            <h2>{modalLable}</h2>
            <span className='modal__close' onClick={onClose}>x</span>
          </div>
          {children}
        </div>
      </div>
    )
  }
  return null
}



import { useCreateCardMutation } from "../../redux/api/questifyApi";


//dodawanie tasku + button
const AddTask= ({onClose, open}) => {

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

	const [createCard] = useCreateCardMutation();

	const handleAddTask = (e) => {
		e.preventDefault();

		const card = {
			title:"Stuff",
			difficulty:"Easy",
			category: "Stuff",
			date: "2020-12-31",
			time: "20:30",
			type: "Task",
		
		};
		createCard(card);
		onClose()
	};


	return (
		<div>
		
<Modal modalLable='Add Task' onClose={onClose} open={open}>
      <form className='addTask' name='addTask' onSubmit={handleAddTask}>
        <input 
          type='text' 
          name='title' 
          onChange={(e) => setTitle(e.target.value.toUpperCase())} 
          value={title}
          placeholder='Enter title'/>
        <textarea 
          onChange={(e) => setDescription(e.target.value)}
          placeholder='Enter task decription'
          value={description}></textarea>
        <button type='submit'>Done</button>
      </form> 
    </Modal>
			<button type="button" onClick={handleAddTask}>button</button>
		</div>
	);
};


