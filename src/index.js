import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

import './global.css'
import Badge from './components/Badge';

const container = document.getElementById('app');

ReactDOM.render(<Badge firstName='Many' lastName='Fuenmayor' jobTitle='Profesor y Administrador' twitter='RosalesGibson' avatarUrl='https://s.gravatar.com/avatar/dd18a220fc4d5d1191bf6432435c4d3f?s=80'/>, container);
