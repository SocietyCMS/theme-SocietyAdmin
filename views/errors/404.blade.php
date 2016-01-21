@extends('layouts.plain')

@section('title')
   404
@endsection

@section('content')
    <div class="ui inverted segment" style="height: 100vh;margin: 0">
        <div class="ui raised very padded center aligned container segment" style="margin-top: 3em">
            <img src="{!! Theme::url('/images/slant.png') !!}" class="ui centered large image">
            <h1 class="ui header">404</h1>
        </div>
    </div>
@endsection