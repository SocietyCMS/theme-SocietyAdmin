<script>
    Vue.http.headers.common['Authorization'] = 'Bearer {{$jwtoken}}';
    window.societycms = window.societycms || {};{{config('society.core.utilities.javascript.js_namespace')}}.jwtoken = '{{$jwtoken}}';
</script>
