<template>
    <div class="row">
        <div class="col-6 mx-auto">
            <div class="card">
                <div class="card-header">
                    <h2>Оставьте ваш отзыв</h2>
                </div>
                <div class="card-body">
                    <form @submit.prevent="submit">
                        <div class="form-group">
                            <label for="comment">Комментарий</label>
                            <textarea
                                class="form-control"
                                name="comment"
                                id="comment"
                                rows="5"
                                v-model="fields.comment"
                            ></textarea>
                            <div
                                v-if="errors && errors.comment"
                                class="text-danger"
                            >{{ errors.comment[0] }}</div>
                        </div>

                        <div class="form-group">
                            <label for="name">ФИО</label>
                            <input
                                type="text"
                                class="form-control"
                                name="name"
                                id="name"
                                v-model="fields.name"
                            />
                            <div
                                v-if="errors && errors.name"
                                class="text-danger"
                            >{{ errors.name[0] }}</div>
                        </div>

                        <div class="form-group">
                            <label for="address">Адрес</label>
                            <input
                                type="text"
                                class="form-control"
                                name="address"
                                id="address"
                                v-model="fields.address"
                            />
                            <div
                                v-if="errors && errors.address"
                                class="text-danger"
                            >{{ errors.address[0] }}</div>
                        </div>

                        <div class="form-group">
                            <label for="email">E-mail</label>
                            <input
                                type="email"
                                class="form-control"
                                name="email"
                                id="email"
                                v-model="fields.email"
                            />
                            <div
                                v-if="errors && errors.email"
                                class="text-danger"
                            >{{ errors.email[0] }}</div>
                        </div>

                        <div class="form-group">
                            <label for="telephone">Мобильный телефон</label>
                            <input
                                type="telephone"
                                class="form-control"
                                name="telephone"
                                placeholder="+7 (XXX) XXX-XXXX"
                                id="telephone"
                                v-model="fields.telephone"
                            />
                            <div
                                v-if="errors && errors.telephone"
                                class="text-danger"
                            >{{ errors.telephone[0] }}</div>
                        </div>

                        <div class="form-group">
                            <label for="file">Файл</label>
                            <input
                                type="file"
                                class="form-control"
                                name="file"
                                id="file"
                                @change="selectFile"
                            />
                            <div
                                v-if="errors && errors.file"
                                class="text-danger"
                            >{{ errors.file[0] }}</div>
                        </div>

                        <button type="submit" class="btn btn-primary">Отправить</button>

                        <div v-if="success" class="alert alert-success mt-3">Message sent!</div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import FormMixin from '../FormMixin';

export default {
    mixins: [FormMixin],
    data() {
        return {
            'action': '/submit',
        }
    },
    watch: {
        'fields.telephone'() {
            console.log(this.fields.telephone);
            this.fields.telephone = this.fields.telephone.replace(/[^0-9]/g, '').slice(1, 11).replace(/^(\d{3})?(\d{3})?(\d{4})?/g, '+7 ($1) $2-$3');
        }
    }
}
</script>

<style>
    #telephone {
        position: relative;
    }

    #telephone::before {
        content: '+7';
        display: block;
        position: absolute;
        z-index: 10;
        top: 0;
        left: 0;
        width: 10px;
        height: 10px;
        background: black;
    }
</style>