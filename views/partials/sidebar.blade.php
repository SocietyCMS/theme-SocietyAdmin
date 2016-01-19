
<div class="toc" style="min-height: 1813px;">
    <div class="ui vertical inverted sticky menu">
        <div class="item">
            <a href="{{ URL::route('dashboard.index') }}"><h2>{{ Setting::get('core::site-name') }}</h2></a>
        </div>

        <div class="item">
            <div class="ui middle aligned grid">
                @if(Setting::get('user::enable-profile'))
                    <div class="ui dimmer" id="editProfileDimmer">
                        <div class="content">
                            <div class="center">
                                <a href="{{route('backend::user.profile.show')}}" class="ui button">
                                    <i class="user icon"></i>
                                    @lang('core::elements.action.edit resource', ['name' => trans('user::profile.title.profile')])
                                </a>
                            </div>
                        </div>
                    </div>
                @endif

                <div class="six wide column">
                    <img class="ui tiny circular right spaced image" src="{{ $currentUser->present()->avatar }}" id="sidebarUserProfilePicture">
                </div>
                <div class="ten wide column">
                    <span><b>{{$currentUser->present()->fullname}}</b></span>
                </div>

            </div>
        </div>

        {!! $sidebar !!}

    </div>
</div>

<script>
    $('#editProfileDimmer')
            .dimmer({
                on: 'hover'
            })
    ;
</script>
