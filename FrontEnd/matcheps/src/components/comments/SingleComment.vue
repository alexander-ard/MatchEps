<template>
  <div class="comment">
    <span class="comment__author">
      {{ getAuthor }}
      ({{ getDate }})
    </span>
    <span class="comment__body">{{ comment.body }}</span>
    <div class="comment__actions">
      <button class="comment__actions__btn" type="button" @click="likeComment">
        {{ comment.likes }}
        <i class="fas fa-thumbs-up"></i>
        Me gusta
      </button>
      <!-- <button class="comment__actions__btn" @click="setCommenting">
        <i class="fas fa-comment"></i>
        Responder
      </button> -->
    </div>

    <Comment v-for="child in comment.children" :key="child.id" :comment="child" />
    <NewComment v-if="commenting" :id="comment.id" :eps="comment.eps" @commentSent="setCommenting" />
  </div>
</template>

<script>
import { db } from '@utils/firebase';
import NewComment from '@components/comments/NewComment';
import SingleComment from '@components/comments/SingleComment';

export default {
  name: 'Comment',
  props: ['comment'],
  components: { NewComment, SingleComment },
  data() {
    return {
      dbComment: null,
      commenting: false,
    };
  },
  computed: {
    getAuthor() {
      return this.comment.anonymus ? 'Anónimo' : this.comment.author;
    },
    getDate() {
      const date = new Date(this.comment.date.seconds * 1000);
      return date.toLocaleString();
    },
  },
  methods: {
    async likeComment() {
      db.doc(`comments/${this.comment.id}`).update({
        likes: this.comment.likes + 1,
      });
    },
    setCommenting() {
      this.commenting = !this.commenting;
    },
  },
};
</script>
