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

    {!! Theme::script('js/vendor.js') !!}
    {!! Theme::script('semantic/dist/semantic.min.js') !!}
</head>
<body id="societyAdmin">
@yield('content')

@yield('htmlComponents')


{!! Theme::script('js/app.js') !!}
@include('javascript.api')

@yield('javascript')

</body>
</html>
