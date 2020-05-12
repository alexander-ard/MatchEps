<template>
  <div class="comments">
    <ListFilter
      @change="updateSelectedEps"
      :title="'Seleccione las EPS'"
      :list="epsList"
      v-if="epsList"
      :unique="true"
    />
    <span class="comments__select" v-if="!selectedEps">
      Selecciona una EPS
    </span>
    <div class="comments__body" v-if="selectedEps">
      <span class="comments__body__empty" v-if="commentList.length === 0">
        No hay comentarios :(
        <br />
        ¡Inicia la conversación!
      </span>
      <div class="comments__body__new">
        <span class="comments__body__new__title">
          Agregar comentario
        </span>
        <NewComment :eps="commentEps" />
      </div>
      <div class="comments__body__list" v-if="selectedEps">
        <span class="comments__body__list__title">
          Comentarios
        </span>
        <SingleComment v-for="comment in commentList" :key="comment.id" :comment="comment" />
      </div>
    </div>
  </div>
</template>

<script>
import SingleComment from '@components/comments/SingleComment';
import NewComment from '@components/comments/NewComment';
import ListFilter from '@components/shared/ListFilter';
import api from '@utils/api.js';
import { db } from '@utils/firebase';

export default {
  name: 'Comments',
  components: { SingleComment, NewComment, ListFilter },
  data() {
    return {
      comments: null,
      epsList: [],
      selectedEps: null,
    };
  },
  mounted() {
    this.getEpsList();
  },
  firestore() {
    return {
      comments: db.collection('comments'),
    };
  },
  methods: {
    async getEpsList() {
      this.epsList = await api.get('eps');
      this.epsList = this.epsList.map((eps) => ({
        id: eps.id,
        name: eps.name,
      }));
    },
    updateSelectedEps(selected) {
      this.selectedEps = false;
      this.selectedEps = selected[0];
    },
  },
  computed: {
    commentEps() {
      return Number(this.selectedEps);
    },
    commentList() {
      return this.comments.filter((c) => {
        return c.eps == this.commentEps;
      });
    },
  },
};
</script>
