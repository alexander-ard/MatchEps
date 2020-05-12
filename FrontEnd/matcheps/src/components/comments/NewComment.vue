<template>
  <div class="newComment">
    <div class="newComment__inputs">
      <div class="newComment__inputs__anon">
        <span>Comentar como anónimo</span>
        <input type="checkbox" v-model="comment.anonymus" />
      </div>
      <input
        type="text"
        class="newComment__inputs__author plain"
        :maxlength="20"
        v-model="comment.author"
        v-if="!comment.anonymus"
        placeholder="Nombre"
      />
      <input type="text" class="newComment__inputs__body plain" :maxlength="maxChar" v-model="comment.body" />
    </div>
    <span class="newComment__charsLeft">
      {{ getAvaliableChars }}
    </span>
    <button type="button" class="newComment__send" @click="sendComment">
      <i class="fas fa-edit"></i>
      Enviar
    </button>
  </div>
</template>

<script>
import { db } from '@utils/firebase';
import firebase from 'firebase';

export default {
  name: 'NewComment',
  props: ['eps'],
  data() {
    return {
      maxChar: 300,
      comment: {
        anonymus: true,
        body: '',
        likes: 0,
      }
    };
  },
  computed: {
    getAvaliableChars() {
      return this.maxChar - this.comment.body.length;
    },
  },
  methods: {
    async sendComment() {
      const comment = Object.assign(this.comment, {
        date: firebase.firestore.Timestamp.fromDate(new Date()),
        eps:  this.eps,
      });

      db.collection(`comments`).add(this.comment);

      this.$emit('commentSent');
    },
  },
};
</script>
