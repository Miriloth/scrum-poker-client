import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Workspace from '../views/Workspace.vue';
import JoinRoom from '../views/JoinRoom.vue';
import PokerRoom from '../views/PokerRoom.vue';
import PokerForm from '../views/PokerForm.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  {
    path: '/poker',
    name: 'Workspace',
    component: Workspace,
    children: [
      { path: 'join', component: JoinRoom },
      { path: 'room/:id', component: PokerRoom },
      { path: 'new', component: PokerForm },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
