<!DOCTYPE html>
<html>
<head>

    <meta charset="UTF-8">
    <title>
        @yield('title')
        | Admin
    </title>

    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">

    {!! Theme::style('semantic/dist/semantic.min.css') !!}
    {!! Theme::style('css/app.css') !!}

    @yield('styles')

    <script src="/messages.js"></script>
    <script>
        Lang.setLocale('{{config('app.locale')}}');
    </script>
    {!! Theme::script('js/vendor.js') !!}
    {!! Theme::script('semantic/dist/semantic.min.js') !!}

    <script>{!! $jsPipeline !!}</script>
</head>
<body id="societyAdmin">

<div class="pusher">

    <div class="full height">
        @include('partials.sidebar')

        <div id="content">
            <div class="ui masthead vertical segment">
               @include('partials.topnav')
            </div>

            <div class="main ui intro container">

                @include('partials.message')

                @yield('content')

            </div>
        </div>
    </div>

    @include('partials.footer')

</div>

@yield('htmlComponents')

{!! Theme::script('js/app.js') !!}

@yield('javascript')

</body>
</html>
