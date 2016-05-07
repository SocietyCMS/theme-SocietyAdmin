<div class="ui container">
    <a href="{{route('logout')}}" class="ui right floated basic button">
        <i class="sign out icon"></i>
        @lang('core::core.general.sign out')
    </a>
    <a href="/" target="_blank" class="ui right floated basic icon button hasPopup" data-content="{{trans('core::core.general.view website')}}" data-variation="inverted">
        <i class="browser icon"></i>
    </a>
</div>
<div class="ui container">
    <h1 class="ui header">
        @yield('title')
        <div class="sub header">
            @yield('subTitle')
        </div>
    </h1>
</div>